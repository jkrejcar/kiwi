const validationResult = (valid, error) => ({ valid: valid, error: error });
const phoneWordsResult = (valid, phoneWords) => ({valid: valid, phoneWords: phoneWords});

module.exports = {
  validationResult,
  phoneWordsResult
};
