const { phoneWordsResult } = require("../models/PhoneWordsModel")

const phoneLetters = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const calculatePhoneWords = (lettersMapArray, n = 0, result = [], current = []) => {
  if (n === lettersMapArray.length) result.push(current.join(""));
  else
    lettersMapArray[n].forEach((item) =>
      calculatePhoneWords(lettersMapArray, n + 1, result, [...current, item])
    );
  return result;
};

const getPhoneWords = (number) => {
  let digits = Array.from(String(number));
  let lettersMapArray = [];

  digits.map((val) => {
    lettersMapArray.push(phoneLetters[val]);
  });
  
  return phoneWordsResult(true, calculatePhoneWords(lettersMapArray))
};

module.exports = {
  getPhoneWords,
};
