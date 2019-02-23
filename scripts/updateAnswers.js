const updateAnswers = (answers, question, answer) => {
  const updatedAnswers = { ...answers }

  // build out an array for answers to sub-question
  if (question.parent) {
    if (!updatedAnswers[question.parent]) {
      updatedAnswers[question.parent] = []
    }

    if (!updatedAnswers[question.parent][question.index]) {
      updatedAnswers[question.parent][question.index] = {}
    }

    updatedAnswers[question.parent][question.index][question.param] = answer
  } else {
    // else, simply store the answer on the object
    updatedAnswers[question.param] = answer
  }

  return updatedAnswers
}

module.exports = updateAnswers
