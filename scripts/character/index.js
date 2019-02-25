const main = require('../main')
const questions = require('./questions')
const defaultAnswers = require('./defaultAnswers')

main(questions, defaultAnswers, `${__dirname}/template.txt`, 'src/characters')
