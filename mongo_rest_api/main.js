require("dotenv").config();
const express = require("express");
const cors = require("cors");
const travelblogDB = require("./travelblogDB");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());

app.use(routes);

app.get("/", async function (req, res) {
  const result = await travelblogDB.findAllData();
  res.json(result);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
