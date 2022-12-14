const express = require("express");
const router = express.Router();
const travelblogDB = require("./travelblogDB");

router.get("/pictures", async function (req, res) {
  const result = await travelblogDB.findAllDataSlideshow();
  res.json(result);
});

module.exports = router;
