const db = require("../models");
const fs = require("fs");
const Wall = db.wall;

const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
  Wall.findAll()
    .then((walls) => {
      if (!walls) {
        console.log("walls Not Found");
        return res.status(200).send({ message: "Empty" });
      } else {
        res.status(200).send({ walls });
      }
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};
exports.create = (req, res) => {
  const data = req.query;
  Wall.create({
    url: data.url,
    name: data.name,
    theme: 1,
    pColor: "#6701e6",
    key: "",
    value: "",
    pTitle: "Wall of Love",
    subTitle: "",
    ctaTitle: "Visit Our Website",
    ctaUrl: "http://getloya.co",
    data: null,
    fileName: "",
    type: "",
  }).then((result) => {
    return res.json({
      CODE: 200,
      message: "Success Form",
      data: result,
    });
  });
};
exports.delete = (req, res) => {
  const Ids = req.query.ids;
  console.log("ids=", Ids);
  Ids.map((value) => {
    Wall.destroy({
      where: {
        id: value,
      },
    }).then((result) => {
      return res.status(200).send({ data: { result } });
    });
  });
};

exports.update = (req, res) => {
  const data = req.query.info;
  console.log("info=", req.query.info);
  Wall.update(
    {
      name: data.name,
      theme: data.theme,
      ctaTitle: data.ctaTitle,
      ctaUrl: data.ctaUrl,
      key: data.key.toString(),
      value: data.value.toString(),
      pColor: data.pColor,
      pTitle: data.pTitle,
      subTitle: data.subTitle,
    },
    {
      where: {
        url: data.url,
      },
    }
  ).then((result) => {
    return res.json({
      CODE: 200,
      message: "Success Form",
      data: result,
    });
  });
};

exports.getByUrl = (req, res) => {
  const wallUrl = req.params.url.replace(":", "");
  const designInfo = {
    data: null,
    fileName: "",
    type: "",
    name: "",
    theme: 0,
    pColor: "",
    key: "",
    value: "",
    pTitle: "",
    subTitle: "",
    ctaTitle: "",
    ctaUrl: "",
  };
  Wall.findAll({
    where: {
      url: wallUrl,
    },
  })
    .then((fdata) => {
      designInfo.data = fdata[0].dataValues.data;
      designInfo.fileName = fdata[0].dataValues.fileName;
      designInfo.type = fdata[0].dataValues.type;
      designInfo.name = fdata[0].dataValues.name;
      designInfo.theme = fdata[0].dataValues.theme;
      designInfo.pColor = fdata[0].dataValues.pColor;
      designInfo.key = fdata[0].dataValues.key;
      designInfo.value = fdata[0].dataValues.value;
      designInfo.pTitle = fdata[0].dataValues.pTitle;
      designInfo.subTitle = fdata[0].dataValues.subTitle;
      designInfo.ctaTitle = fdata[0].dataValues.ctaTitle;
      designInfo.ctaUrl = fdata[0].dataValues.ctaUrl;
      res.status(200).send({ data: designInfo });
    })
    .catch((err) => {
      console.log("wallERR=", err);
    });
};
