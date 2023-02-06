const controller = require('../controllers/stripe.controller');
const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

router.post('/api/payment/pay', controller.payment);

module.exports = router;
