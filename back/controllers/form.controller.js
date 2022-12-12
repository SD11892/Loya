const db = require("../models");
const Form = db.form;
const Design = db.design;
const Welcome = db.welcome;
const Response = db.response;
const Attribution = db.attribution;
const Thank = db.thank;

const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
  console.log("here");
  Form.findAll({
    where: {
      projectId: 1,
    },
  })
    .then((forms) => {
      if (!forms) {
        console.log("Forms Not Found");
        return res.status(200).send({ message: "Empty" });
      } else {
        res.status(200).send({ forms });
      }
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};

exports.getByUrl = (req, res) => {
  const formUrl = req.params.url.replace(":", "");
  const designInfo = {
    logoUrl: "",
    pColor: "",
    bColor: "",
    prompt: ``,
    collect: 0,
    rating: 0,
    title: "",
    message: ``,
    thankTitle: "",
    thankMessage: ``,
    call: 0,
    textBtn: "",
    linkUrl: "",
    custom: 0,
    directUrl: "",
    key: [],
    value: [],
    avatar: "",
  };
  Design.findAll({
    where: {
      formUrl: formUrl,
    },
  })
    .then((data) => {
      designInfo.logoUrl = data[0].dataValues.logoUrl;
      designInfo.pColor = data[0].dataValues.pColor;
      designInfo.bColor = data[0].dataValues.bColor;
      Welcome.findAll({
        where: {
          formUrl: formUrl,
        },
      }).then((Ddata) => {
        designInfo.title = Ddata[0].dataValues.title;
        designInfo.message = Ddata[0].dataValues.message;
        Response.findAll({
          where: {
            formUrl: formUrl,
          },
        }).then((Rdata) => {
          designInfo.prompt = Rdata[0].dataValues.prompt;
          designInfo.rating = Rdata[0].dataValues.rating;
          designInfo.collect = Rdata[0].dataValues.collect;
          Thank.findAll({
            where: {
              formUrl: formUrl,
            },
          }).then((result) => {
            designInfo.thankTitle = result[0].dataValues.title;
            designInfo.thankMessage = result[0].dataValues.message;
            designInfo.call = result[0].dataValues.call;
            designInfo.textBtn = result[0].dataValues.text_btn;
            designInfo.linkUrl = result[0].dataValues.linkUrl;
            designInfo.custom = result[0].dataValues.custom;
            designInfo.directUrl = result[0].dataValues.directUrl;

            res.status(200).send({ data: designInfo });
          });
        });
      });
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};

exports.create = (req, res) => {
  Form.create({
    projectId: req.query.parentId,
    formUrl: req.query.url,
    formName: req.query.name,
    response: 0,
  })
    .then(() => {
      Design.create({
        formUrl: req.query.url,
        logoUrl: "./heart.svg",
        pColor: "#6701e6",
        bColor: "#ffffff",
      }).then(() => {
        Welcome.create({
          formUrl: req.query.url,
          title: "Share a testimonial!",
          message:
            "Do you love using our product?\n We'd love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don't forget to smile 😊",
        }).then(() => {
          Response.create({
            formUrl: req.query.url,
            prompt:
              "- What do you like most about us?\n- Would you recommend us to a friend?",
            collect: 0,
            Rating: 0,
          }).then(() => {
            Thank.create({
              formUrl: req.query.url,
              title: "Thank you",
              message:
                "Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.",
              call: 0,
              custom: 0,
            }).then((result) => {
              return res.json({
                CODE: 200,
                message: "Success Form",
                data: result,
              });
            });
          });
        });
      });
    })
    .catch((err) => {
      console.log("err=", err);
    });
};

exports.delete = (req, res) => {
  const Ids = req.query.ids;
  console.log("ids=", Ids);
  Ids.map((value) => {
    Form.destroy({
      where: {
        Id: value,
      },
    }).then(() => {
      Welcome.destroy({
        where: {
          Id: value,
        },
      }).then(() => {
        Design.destroy({
          where: {
            Id: value,
          },
        }).then(() => {
          Response.destroy({
            where: {
              Id: value,
            },
          }).then(() => {
            Thank.destroy({
              where: {
                Id: value,
              },
            })
              .then((result) => {
                return res.status(200).send({ message: "Empty" });
              })
              .catch((err) => {
                console.log("err=", err);
                res.status(500).send({ message: err.message });
              });
          });
        });
      });
    });
  });
};
