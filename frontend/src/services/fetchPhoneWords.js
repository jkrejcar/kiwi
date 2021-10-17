import axios from "axios";

const validationResult = (valid, error) => ({ valid: valid, error: error });

const url = "http://localhost:5000/api/v1/PhoneWords";

const fetchPhoneWords = (number) => {
  return axios
    .get(`${url}/${number}`)
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        return err.response.data;
      } else if (err.request) {
        // client never received a response, or request never left
        return validationResult(
          false,
          "Hups, something went wrong, please check if server is running..."
        );
      }
    });
};

export default fetchPhoneWords;
