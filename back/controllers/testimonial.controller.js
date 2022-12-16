const db = require("../models");
const fs = require("fs");
const Form = db.form;
const Testimonial = db.testimonial;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const data = req.query.info;
  console.log("data=", data);
  if (req.file !== undefined) {
    Form.findAll({
      where: {
        formUrl: data.url,
      },
    }).then((value) => {
      Form.update(
        {
          response: value[0].dataValues.response + 1,
        },
        {
          where: {
            formUrl: data.url,
          },
        }
      ).then(() => {
        Testimonial.create({
          url: data.url,
          key: data.key.toString(),
          value: data.value.toString(),
          content: data.content,
          status: 0,
          type: data.type,
          name: data.name,
          data: fs.readFileSync("../upload/" + req.file.filename),
        });
      });
    });
  } else {
    Form.findAll({
      where: {
        formUrl: data.url,
      },
    }).then((value) => {
      Form.update(
        {
          response: value[0].dataValues.response + 1,
        },
        {
          where: {
            formUrl: data.url,
          },
        }
      ).then(() => {
        Testimonial.create({
          key: data.key.toString(),
          url: data.url,
          value: data.value.toString(),
          content: data.content,
          status: 0,
        });
      });
    });
  }
};

exports.update = (req, res) => {
  const data = req.query.info;
  if (req.file !== undefined) {
    Testimonial.update(
      {
        url: data.url,
        key: data.key.toString(),
        value: data.value.toString(),
        content: data.content,
        status: data.status,
        type: data.type,
        name: data.name,
        data: fs.readFileSync("../upload/" + req.file.filename),
      },
      {
        where: {
          id: data.id,
        },
      }
    );
  } else {
    Testimonial.update(
      {
        url: data.url,
        value: data.value.toString(),
        content: data.content,
        status: data.status,
      },
      {
        where: {
          id: data.id,
        },
      }
    ).then((result) => {
      res.json({ result });
    });
  }
};

exports.getAll = (req, res) => {
  Testimonial.findAll()
    .then((testimonials) => {
      if (!testimonials) {
        console.log("Testimonials Not Found");
        return res.status(200).send({ message: "Empty" });
      } else {
        res.status(200).send({ testimonials });
      }
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const Id = req.query.id;
  Testimonial.destroy({
    where: {
      Id: Id,
    },
  }).then((result) => {
    console.log("res=", res);
    res.json({ result });
  });
};
