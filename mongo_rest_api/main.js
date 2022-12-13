require("dotenv").config();
const express = require("express");
const travelblogDB = require("./travelblogDB");

const app = express();
const port = process.env.PORT || 3001;

app.get("/", async function (req, res) {
  const result = await travelblogDB.findAllData();
  res.json(result);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
