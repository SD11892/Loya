const controller = require("../controllers/tag.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/api/tag/create", controller.create);
router.post("/api/tag/getAll", controller.getAll);
module.exports = router;
