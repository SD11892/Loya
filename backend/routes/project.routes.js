const controller = require("../controllers/project.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/api/project/all", controller.getAll);
router.post("/api/project/create", controller.create);
router.post("/api/project/update", controller.update);
router.post("/api/project/delete", controller.delete);

router.get("/api/project/:id", controller.getById);

module.exports = router;
