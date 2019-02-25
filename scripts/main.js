const path = require('path')
const readline = require('readline')
const fs = require('fs')
const colors = require('colors/safe')
const askQuestion = require('./askQuestion')
const updateAnswers = require('./updateAnswers')

const { red, green, cyan } = colors

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

module.exports = async (questions, defaultAnswers, templatePath, outputPath) => {
  let answers = {
    ...defaultAnswers,
  }

  for (const question of questions) {
    if (answers[question.prerequisite] === false) {
      continue
    }

    while (true) {
      try {
        const answer = await askQuestion(rl, question)
        answers = updateAnswers(answers, question, answer)

        if (question.subQuestions) {
          const numberOfSubQuestionsArray = [...Array(answers[question.param])]

          if (numberOfSubQuestionsArray.length === 0) {
            answers[question.subQuestions[0].parent] = []
          }

          for (const [index] of numberOfSubQuestionsArray.entries()) {
            for (const subQuestion of question.subQuestions) {
              subQuestion.index = index
              subQuestion.labelSuffix = index + 1

              while (true) {
                try {
                  const subAnswer = await askQuestion(rl, subQuestion)
                  answers = updateAnswers(answers, subQuestion, subAnswer)

                  break
                } catch (error) {
                  console.log(red(error.message))
                }
              }
            }
          }
        }

        break
      } catch (error) {
        console.log(red(error.message))
      }
    }
  }

  rl.close()

  console.log('')
  console.log('Using answers:', answers)

  let template = fs.readFileSync(templatePath, 'utf8')

  const getPlaceholder = param => `__${param}__`

  Object.keys(answers).forEach((param) => {
    const placeholder = getPlaceholder(param)
    const answer = answers[param]

    if (typeof answer === 'boolean') {
      /*
       * If answer is `true`, remove the placeholders only.
       * If answer is `false`, remove the placeholders and the content between them.
       *
       * Notes:
       *   - Each backslash (\) must be escaped within the constructed string, as
       *     opposed to when they're used within regex forward slashes (e.g. /\s/).
       *   - The lazy quantifier (*?) finds the shortest possible match.
       */
      const boolMarker = answer
        ? `\\s*${placeholder}`
        : `\\s*${placeholder}([\\s\\S]*?)${placeholder}`

      template = template.replace(new RegExp(boolMarker, 'g'), '')

      return
    }

    if (Array.isArray(answer)) {
      const arrayItemPlaceholder = getPlaceholder(`${param}Item`)
      const arrayItemMarker = `\\s*${arrayItemPlaceholder}([\\s\\S]*?)${arrayItemPlaceholder}`
      const arrayItemTemplate = template.match(new RegExp(arrayItemMarker))[1]

      let arrayItems = ''
      answer.forEach((subAnswer, i) => {
        let arrayItem = arrayItemTemplate

        Object.keys(subAnswer).forEach((key) => {
          // replace imports
          template = template.replace(
            new RegExp(getPlaceholder(key), 'g'),
            `\n  ${subAnswer[key]},${getPlaceholder(key)}`
          )

          // remove final import placeholder
          if (answer.length - 1 === i) {
            template = template.replace(new RegExp(getPlaceholder(key), 'g'), '')
          }

          // replace array item placeholders
          arrayItem = arrayItem.replace(new RegExp(getPlaceholder(key), 'g'), subAnswer[key])
        })

        arrayItems += arrayItem
      })

      template = template.replace(new RegExp(arrayItemMarker, 'g'), arrayItems)
    }

    template = template.replace(new RegExp(placeholder, 'g'), answer)
  })

  const ROOT = path.join(__dirname, '../')
  const outputFilePath = path.join(ROOT, outputPath, `${answers.name.toLowerCase()}.js`)
  fs.writeFileSync(outputFilePath, template)

  console.log('')
  console.log(green('File entry complete!'))
  console.log(green('See file written at'), cyan(outputFilePath))
}
