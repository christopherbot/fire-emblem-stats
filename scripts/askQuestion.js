const isDefined = value => value !== undefined && value !== null

const askQuestion = (rl, question) => new Promise((resolve, reject) => {
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
      if (question.oneOf && !question.oneOf.includes(answer)) {
        reject({
          type: 'invalid_type',
          message: `Please enter one of the following values: ${question.oneOf.join(', ')}`,
        })

        return
      }

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

      if (question.titleCase) {
        answer = answer[0].toUpperCase() + answer.substr(1)
      }
    }

    // validate booleans
    if (question.type === 'boolean') {
      // convert y/n answers into booleans
      if (answer === 'y' || answer === 'Y' || answer === 'true') {
        answer = true
      } else if (answer === 'n' || answer === 'N' || answer === 'false') {
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

    resolve(answer)
  })
})

module.exports = askQuestion
