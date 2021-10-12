const {
  MAX_NUMBER_LENGTH,
  ERR_INVALID_NUMBER,
  ERR_MAX_NUMBER_LENGTH,
  ERR_MISSING_NUMBER,
} = require("../config");

const { validationResult } = require("../models/PhoneWordsModel");

const validatePhoneNumber = (num) => {
  if (!num) {
    return validationResult(false, ERR_MISSING_NUMBER);
  }

  if (num.length > MAX_NUMBER_LENGTH) {
    return validationResult(false, ERR_MAX_NUMBER_LENGTH);
  }

  let regex = new RegExp("^[2-9]+$");
  if (!regex.test(num)) {
    return validationResult(false, ERR_INVALID_NUMBER);
  }

  return validationResult(true, "");
};

module.exports = {
  validatePhoneNumber,
};
