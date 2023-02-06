const db = require("../models");
const fs = require("fs");
const Tag = db.tag;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const data = req.query;
  console.log(data);
  Tag.create({
    tag_name: data.tagname,
    user_id: data.userId,
  }).then((result) => {
    return res.json({
      CODE: 200,
      message: "Success Tag",
      data: result,
    });
  });
};

exports.getAll = (req, res) => {
  const data = req.query;
  Tag.findAll({
    where: {
      user_id: data.userId,
    },
  })
    .then((result) => {
      return res.json({
        CODE: 200,
        message: "Success Tag",
        data: result,
      });
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};
