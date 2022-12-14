const express = require("express");
const router = express.Router();

router.get("/pictures", function (req, res) {
  res.send("all pictures");
});

module.exports = router;
