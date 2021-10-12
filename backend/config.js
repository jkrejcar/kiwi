//API Config
const MAX_NUMBER_LENGTH = 9;

//Error messages
const ERR_INVALID_NUMBER = "Number contains not supported chars or digits, '1' and '0' is not supported.";
const ERR_MISSING_NUMBER = "Number missing, please send a valid number."
const ERR_MAX_NUMBER_LENGTH = `Number is too long, maximal supported number length is ${MAX_NUMBER_LENGTH}`;

module.exports = {
  MAX_NUMBER_LENGTH,
  ERR_INVALID_NUMBER,
  ERR_MISSING_NUMBER,
  ERR_MAX_NUMBER_LENGTH
};
