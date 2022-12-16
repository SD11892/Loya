const controller = require("../controllers/testimonial.controller");
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

router.get("/api/testimonial/all", controller.getAll);
router.post(
  "/api/testimonial/create",
  upload.single("file"),
  controller.create
);
router.post(
  "/api/testimonial/update",
  upload.single("file"),
  controller.update
);
router.post("/api/testimonial/delete", controller.delete);

module.exports = router;
