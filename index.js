const express = require("express");

const app = express();

app.listen(5001, () => console.log("running on 5001"));

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
