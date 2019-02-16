const path = require('path')
const readline = require('readline')
const fs = require('fs')
const colors = require('colors/safe')

const isDefined = value => value !== undefined && value !== null

const questions = require('./questions')

const { red, green, cyan } = colors

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const ROOT = path.join(__dirname, '../..')
const TEMPLATE_FILE_PATH = `${__dirname}/template.txt`

const getPlaceholder = param => `__${param}__`

const main = async () => {
  const defaultAnswers = {
    game: 'fe7', // this is constant until more games are supported
  }

  const answers = {
    ...defaultAnswers,
  }

  const askQuestion = question =>
    new Promise((resolve, reject) => {
      if (answers[question.prerequisite] === false) {
        resolve()

        return
      }

      const questionLabel = `${
        isDefined(question.labelPrefix)
          ? ` ${question.labelPrefix}`
          : ''
      }${question.label}${
        isDefined(question.labelSuffix)
          ? ` ${question.labelSuffix}`
          : ''
      }`

      rl.question(`${questionLabel}: `, (answer) => {
        // validate strings that are used as variable names
        if (question.type === 'string') {
          const startsWithValidCharacter = string => /^[a-zA-Z_]/.test(string)

          if (question.variableName) {
            if (!startsWithValidCharacter(answer)) {
              reject({
                type: 'invalid_type',
                message: 'Please enter a valid string. It must begin with a letter or underscore.',
              })

              return
            }

            answer = answer[0].toLowerCase() + answer.substr(1)
          }
        }

        // validate booleans
        if (question.type === 'boolean') {
          // convert y/n answers into booleans
          if (answer === 'y' || answer === 'Y') {
            answer = true
          } else if (answer === 'n' || answer === 'N') {
            answer = false
          } else {
            reject({
              type: 'invalid_type',
              message: 'Please enter "y" or "n".',
            })

            return
          }
        }

        // validate numbers
        if (question.type === 'number') {
          answer = parseInt(answer)

          if (isNaN(answer)) {
            reject({
              type: 'invalid_type',
              message: 'Please enter a number.',
            })

            return
          }
        }

        // build out an array for answers to sub-question
        if (question.parent) {
          if (!answers[question.parent]) {
            answers[question.parent] = []
          }

          if (!answers[question.parent][question.index]) {
            answers[question.parent][question.index] = {}
          }

          answers[question.parent][question.index][question.param] = answer
        } else {
          // else, simply store the answer on the object
          answers[question.param] = answer
        }

        resolve()
      })
    })

  for (const question of questions) {
    while (true) {
      try {
        await askQuestion(question)

        if (question.subQuestions) {
          const numberOfSubQuestionsArray = [...Array(answers[question.param])]

          for (const [index] of numberOfSubQuestionsArray.entries()) {
            for (const subQuestion of question.subQuestions) {
              subQuestion.index = index
              subQuestion.labelSuffix = index + 1

              while (true) {
                try {
                  await askQuestion(subQuestion)

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

  let template = fs.readFileSync(TEMPLATE_FILE_PATH, 'utf8')

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

  const characterFilePath = path.join(ROOT, 'src/characters', `${answers.name.toLowerCase()}.js`)
  fs.writeFileSync(characterFilePath, template)

  console.log('')
  console.log(green('Character entry complete!'))
  console.log(green('See file written at'), cyan(characterFilePath))
}

main()
