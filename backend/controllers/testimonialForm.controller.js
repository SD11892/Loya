const db = require('../models');
const fs = require('fs');
const TestimonialForm = db.testimonialForm;

const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
  const data = req.query;
  TestimonialForm.findAll({
    where: {
      projectId: data.projectId,
      userId: data.userId,
    },
  })
    .then((forms) => {
      if (!forms) {
        console.log('Forms Not Found');
        return res.status(200).send({ message: 'Empty' });
      } else {
        console.log('forms=', forms);
        res.status(200).send({ forms });
      }
    })
    .catch((err) => {
      console.log('err=', err);
      res.status(500).send({ message: err.message });
    });
};
exports.create = (req, res) => {
  const data = req.query;
  TestimonialForm.create({
    url: data.url,
    testimonials: data.testimonials,
    name: data.name,
    spacing: 'medium',
    shadow: 'medium',
    border: 'medium',
    bgColor: '#ffffff',
    txtColor: '#374151',
    ratingColor: '#fbbf24',
    theme: 1,
    single: data.single,
    userId: Number(data.userId),
    projectId: Number(data.projectId),
    public: 0,
  }).then((result) => {
    return res.json({
      CODE: 200,
      message: 'Success Form',
      data: result,
    });
  });
};
exports.delete = (req, res) => {
  const Ids = req.query.ids;
  console.log('ids=', Ids);
  Ids.map((value) => {
    TestimonialForm.destroy({
      where: {
        id: value,
      },
    }).then((result) => {
      return res.status(200).send({ data: { result } });
    });
  });
};

exports.update = (req, res) => {
  const data = req.query;
  console.log('req=', data);
  TestimonialForm.update(
    {
      spacing: data.info.spacing,
      shadow: data.info.shadow,
      border: data.info.border,
      bgColor: data.info.bgColor,
      txtColor: data.info.txtColor,
      ratingColor: data.info.ratingColor,
      theme: data.info.theme,
      blColor: data.info.blColor,
      bfColor: data.info.bfColor,
      fgColor: data.info.fgColor,
      checked: data.info.checked,
      public: data.info.public,
    },
    {
      where: {
        url: data.info.url,
      },
    }
  ).then((result) => {
    return res.json({
      CODE: 200,
      message: 'Success Form',
      data: result,
    });
  });
};

exports.getByUrl = (req, res) => {
  const formUrl = req.params.url.replace(':', '');
  const designInfo = {
    id: 0,
    spacing: '',
    shadow: '',
    border: '',
    bgColor: '',
    txtColor: '',
    ratingColor: '',
    theme: 0,
    blColor: '',
    bfColor: '',
    fgColor: '',
    checked: '',
    public: 0,
  };
  TestimonialForm.findAll({
    where: {
      url: formUrl,
    },
  })
    .then((fdata) => {
      designInfo.id = fdata[0].dataValues.id;
      designInfo.spacing = fdata[0].dataValues.spacing;
      designInfo.shadow = fdata[0].dataValues.shadow;
      designInfo.border = fdata[0].dataValues.border;
      designInfo.bgColor = fdata[0].dataValues.bgColor;
      designInfo.txtColor = fdata[0].dataValues.txtColor;
      designInfo.ratingColor = fdata[0].dataValues.ratingColor;
      designInfo.bfColor = fdata[0].dataValues.bfColor;
      designInfo.blColor = fdata[0].dataValues.blColor;
      designInfo.fgColor = fdata[0].dataValues.fgColor;
      designInfo.theme = fdata[0].dataValues.theme;
      designInfo.checked = fdata[0].dataValues.checked;
      designInfo.public = fdata[0].dataValues.public;
      res.status(200).send({ data: designInfo });
    })
    .catch((err) => {
      console.log('testimonialFormERR=', err);
    });
};
