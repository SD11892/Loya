const controller = require('../controllers/testimonial.controller');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

router.post('/api/testimonial/all', controller.getAll);
router.post('/api/testimonial/import', controller.importAll);
router.post('/api/testimonial/history', controller.importHistory);
router.post('/api/testimonial/googleReviews', controller.googleReview);
router.post(
  '/api/testimonial/create',
  upload.single('file'),
  controller.create
);
router.post(
  '/api/testimonial/update',
  upload.single('file'),
  controller.update
);
router.post('/api/testimonial/delete', controller.delete);
router.post('/api/testimonial/byId', controller.getById);

router.get('/api/testimonial/:url', controller.getByUrl);

router.post(
  '/api/testimonial/upload/video',
  upload.single('file'),
  controller.uploadVideo
);

router.post(
  '/api/testimonial/upload/video',
  upload.single('file'),
  controller.uploadVideo
);

module.exports = router;
