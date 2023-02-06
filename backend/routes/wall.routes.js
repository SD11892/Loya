const controller = require("../controllers/wall.controller");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/api/wall/all", controller.getAll);
router.get("/api/wall/:url", controller.getByUrl);
router.post("/api/wall/create", controller.create);
router.post("/api/wall/update", controller.update);
router.post("/api/wall/delete", controller.delete);

module.exports = router;
