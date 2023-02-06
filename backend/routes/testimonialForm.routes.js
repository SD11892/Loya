const controller = require("../controllers/testimonialForm.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/api/testimonialform/all", controller.getAll);
router.get("/api/testimonialform/:url", controller.getByUrl);
router.post("/api/testimonialform/create", controller.create);
router.post("/api/testimonialform/update", controller.update);
router.post("/api/testimonialform/delete", controller.delete);

module.exports = router;
