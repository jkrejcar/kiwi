import axios from "axios";

const url = "http://localhost:5000/api/v1/PhoneWords";

const fetchPhoneWords = (number) => {
  return axios
    .get(`${url}/${number}`)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export default fetchPhoneWords;