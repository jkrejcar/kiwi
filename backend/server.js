require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;
const router = require("./routes/index");

app.use(`/${process.env.API_BASE}/${process.env.API_VERSION}/`, router);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
