const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

router.post('/api/auth/signup', controller.signup);
router.post('/api/auth/google', controller.google);
router.post('/api/auth/signin', controller.signin);
router.post('/api/auth/email', controller.verify);
router.post('/api/auth/change_password', controller.update);
router.post('/api/auth/gmailGet', controller.getByGmail);

module.exports = router;
