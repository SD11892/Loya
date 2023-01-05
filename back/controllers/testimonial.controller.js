const db = require("../models");
const fs = require("fs");
const { response } = require("../models");
const Form = db.form;
const Testimonial = db.testimonial;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const data = req.query.info;
  console.log("submit=", data);
  if (req.file !== undefined) {
    if (data.url !== "") {
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
        )
          .then(() => {
            Testimonial.create({
              url: data.url,
              key: data.key.toString(),
              value: data.value.toString(),
              content: data.content,
              status: 0,
              type: data.type,
              name: data.name,
              rating: data.rating,
              data: fs.readFileSync("../upload/" + req.file.filename),
              index: data.index,
              projectId: data.projectId,
              userId: data.userId,
            });
          })
          .then((r) => {
            res.json({ r });
          });
      });
    } else {
      Testimonial.create({
        imageUrl: data.imageUrl,
        importDate: data.importDate,
        url: data.url,
        key: data.key.toString(),
        value: data.value.toString(),
        content: data.content,
        status: 0,
        type: data.type,
        name: data.name,
        rating: data.rating,
        data: fs.readFileSync("../upload/" + req.file.filename),
        index: data.index,
        projectId: data.projectId,
        userId: data.userId,
      }).then((result) => {
        res.json({ result });
      });
    }
  } else {
    if (data.url !== "") {
      console.log(data.url);
      Form.findAll({
        where: {
          formUrl: data.url,
        },
      }).then((value) => {
        console.log("value=", value);
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
            imageUrl: data.imageUrl,
            importDate: data.importDate,
            key: data.key.toString(),
            url: data.url,
            value: data.value.toString(),
            content: data.content,
            status: 0,
            rating: data.rating,
            index: data.index,
            projectId: data.projectId,
            userId: data.userId,
          }).then((r) => {
            res.json({ r });
          });
        });
      });
    } else {
      Testimonial.create({
        imageUrl: data.imageUrl,
        importDate: data.importDate,
        key: data.key.toString(),
        url: data.url,
        value: data.value.toString(),
        content: data.content,
        status: 0,
        index: data.index,
        rating: data.rating,
        projectId: data.projectId,
        userId: data.userId,
      }).then((result) => {
        res.json({ result });
      });
    }
  }
};
exports.update = (req, res) => {
  const data = req.query.info;
  console.log("data=", data);
  if (req.file !== undefined) {
    Testimonial.update(
      {
        url: data.url,
        key: typeof data.key === "string" ? data.key : data.key.toString(),
        value:
          typeof data.value === "string" ? data.value : data.value.toString(),
        content: data.content,
        status: data.status,
        type: data.type,
        name: data.name,
        rating: data.rating,
        data: fs.readFileSync("../upload/" + req.file.filename),
        index: data.index,
      },
      {
        where: {
          id: data.id,
        },
      }
    ).then((result) => {
      res.json({ code: 200, data: result, message: "success" });
    });
  } else {
    Testimonial.update(
      {
        url: data.url,
        key: typeof data.key === "string" ? data.key : data.key.toString(),
        value:
          typeof data.value === "string" ? data.value : data.value.toString(),
        content: data.content,
        status: data.status,
        rating: data.rating,
        index: data.index,
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
  const data = req.query;
  console.log(data);
  Testimonial.findAll({
    where: {
      userId: data.userId,
      projectId: data.projects.map((row) => row.id),
    },
    order: [["index", "ASC"]],
  })
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
  Testimonial.findAll({
    where: {
      Id: Id,
    },
  }).then((list) => {
    if (list.url !== undefined) {
      Form.update(
        {
          response: response - 1,
        },
        {
          where: {
            formUrl: list.url,
          },
        }
      ).then(() => {
        Testimonial.destroy({
          where: {
            Id: Id,
          },
        }).then((result) => {
          console.log("res=", res);
          res.json({ result });
        });
      });
    } else {
      Testimonial.destroy({
        where: {
          Id: Id,
        },
      }).then((result) => {
        console.log("res=", res);
        res.json({ result });
      });
    }
  });
};

exports.getByUrl = (req, res) => {
  const formUrl = req.params.url.replace(":", "");
  const info = {
    key: [],
    value: [],
    content: "",
    data: "",
    rating: 0,
  };
  Testimonial.findAll({
    where: {
      url: formUrl,
    },
  })
    .then((fdata) => {
      console.log("fdata=", fdata);
      info.key = fdata.key;
      info.value = fdata.value;
      info.content = fdata.content;
      info.data = fdata.data;
      info.rating = fdata.rating;
      res.status(200).send({ data: info });
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};

exports.uploadVideo = (req, res) => {
  const data = req.query.info;
  console.log("data=", data);
  if (req.file !== undefined) {
    fs.readFileSync("../upload/" + req.file.filename);
    Testimonial.update(
      {
        video: data.video,
        note: data.note,
      },
      {
        where: {
          url: data.url,
        },
      }
    ).then((result) => {
      res.json({ code: 200, data: result, message: "success" });
    });
  } else {
    res.json({ code: 404, message: "Require a video file" });
  }
};
