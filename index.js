const express = require("express");
const app = express();
const pool = require("./query.js");
const port = 3000;
const data = require("./router.js");

app.use("/data", data);

pool.connect((err, res) => {
  console.log(err);
  console.log("connected");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});