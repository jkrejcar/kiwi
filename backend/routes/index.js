const express = require("express");
const router = express.Router();
const { validatePhoneNumber } = require("../utils/utils");
const { getPhoneWords } = require("../services/getPhoneWords");

router.all("/PhoneWords/:number", (req, res) => {
  let validationResult = validatePhoneNumber(req.params.number);
  let data = {};
  let statusCode;

  if (validationResult.valid) {
    data = getPhoneWords(req.params.number);
    statusCode = 200;
  } else {
    data = validationResult;
    statusCode = 400;
  }
  res.set("Access-Control-Allow-Origin", "*");
  res.status(statusCode).json(data);
});

module.exports = router;
