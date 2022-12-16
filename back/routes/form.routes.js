const controller = require("../controllers/form.controller");
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

router.get("/api/form/all", controller.getAll);
router.get("/api/form/:url", controller.getByUrl);
router.post("/api/form/create", controller.create);
router.post("/api/form/update", upload.single("file"), controller.update);
router.post("/api/form/delete", controller.delete);

module.exports = router;
