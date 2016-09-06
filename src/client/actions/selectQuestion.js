
export default  function selectQuestion(question) {
  return {
    type: 'QUESTION_SELECTED',
    payload : question
  };
}
