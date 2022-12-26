const db = require("../models");
const fs = require("fs");
const Form = db.form;
const Design = db.design;
const Welcome = db.welcome;
const Response = db.response;
const Attribution = db.attribution;
const Testimonial = db.testimonial;
const Thank = db.thank;

const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
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
    formName: "",
    name: "",
    type: "",
    data: null,
    pColor: "",
    bColor: "",
    prompt: ``,
    checked: [],
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
  };
  Form.findAll({
    where: {
      formUrl: formUrl,
    },
  })
    .then((fdata) => {
      designInfo.formName = fdata[0].dataValues.formName;
      Design.findAll({
        where: {
          formUrl: formUrl,
        },
      }).then((data) => {
        designInfo.checked = data[0].dataValues.checked.split(",");
        designInfo.data = data[0].dataValues.data;
        designInfo.type = data[0].dataValues.data;
        designInfo.name = data[0].dataValues.fileName;
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
            Attribution.findAll({
              where: {
                formUrl: formUrl,
              },
            }).then((Adata) => {
              designInfo.key = Adata[0].dataValues.key;
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
        name: null,
        type: null,
        data: null,
        pColor: "#6701e6",
        bColor: "#ffffff",
        checked: [true, true, false, false].toString(),
      }).then(() => {
        Welcome.create({
          formUrl: req.query.url,
          title: "Share a testimonial!",
          message:
            "Do you love using our product?\nWe'd love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don't forget to smile 😊",
        }).then(() => {
          Response.create({
            formUrl: req.query.url,
            prompt:
              "- What do you like most about us?\n- Would you recommend us to a friend?",
            collect: 0,
          }).then(() => {
            Attribution.create({
              formUrl: req.query.url,
              key: "Your Name,Email Address,Headline,Your Website",
            }).then(() => {
              Thank.create({
                formUrl: req.query.url,
                title: "Thank you",
                message:
                  "Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.",
                call: 0,
                custom: 0,
              }).then((result) => {
                console.log("result=", result.dataValues.formUrl);
                return res.json({
                  CODE: 200,
                  message: "Success Form",
                  data: result.dataValues.formUrl,
                });
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

exports.update = (req, res) => {
  const data = req.query.info;
  if (req.file !== undefined) {
    Form.update(
      {
        formName: data.formName,
      },
      {
        where: {
          formUrl: data.formUrl,
        },
      }
    ).then(() => {
      Design.update(
        {
          pColor: data.pColor,
          bColor: data.bColor,
          type: data.fileType,
          name: data.fileName,
          checked: data.checked.toString(),
          data: fs.readFileSync("../upload/" + req.file.filename),
        },
        {
          where: {
            formUrl: data.formUrl,
          },
        }
      ).then((image) => {
        fs.writeFileSync("../tmp/" + image.name, image.data);
        Welcome.update(
          {
            title: data.title,
            message: data.message,
          },
          {
            where: {
              formUrl: data.formUrl,
            },
          }
        ).then(() => {
          Response.update(
            {
              prompt: data.prompt,
            },
            {
              where: {
                formUrl: data.formUrl,
              },
            }
          ).then(() => {
            Attribution.update(
              {
                key: data.key.toString(),
              },
              {
                where: {
                  formUrl: data.formUrl,
                },
              }
            ).then(() => {
              Thank.update(
                {
                  title: data.thankTitle,
                  message: data.thankMessage,
                },
                {
                  where: {
                    formUrl: data.formUrl,
                  },
                }
              ).then((result) => {
                res.json({ result });
              });
            });
          });
        });
      });
    });
  } else {
    Form.update(
      {
        formName: data.formName,
      },
      {
        where: {
          formUrl: data.formUrl,
        },
      }
    ).then(() => {
      Design.update(
        {
          pColor: data.pColor,
          bColor: data.bColor,
          type: data.fileType,
          name: data.fileName,
          checked: data.checked.toString(),
        },
        {
          where: {
            formUrl: data.formUrl,
          },
        }
      ).then(() => {
        Welcome.update(
          {
            title: data.title,
            message: data.message,
          },
          {
            where: {
              formUrl: data.formUrl,
            },
          }
        ).then(() => {
          Response.update(
            {
              prompt: data.prompt,
            },
            {
              where: {
                formUrl: data.formUrl,
              },
            }
          ).then(() => {
            Attribution.update(
              {
                key: data.key.toString(),
              },
              {
                where: {
                  formUrl: data.formUrl,
                },
              }
            ).then(() => {
              Thank.update(
                {
                  title: data.thankTitle,
                  message: data.thankMessage,
                },
                {
                  where: {
                    formUrl: data.formUrl,
                  },
                }
              ).then((result) => {
                res.json({ result });
              });
            });
          });
        });
      });
    });
  }
};

exports.delete = (req, res) => {
  const Ids = req.query.ids;
  console.log("ids=", Ids);
  Ids.map((value) => {
    Form.findAll({
      where: {
        Id: value,
      },
    }).then((form) => {
      let formUrl = form[0].dataValues.formUrl;
      Form.destroy({
        where: {
          formUrl: formUrl,
        },
      }).then(() => {
        Welcome.destroy({
          where: {
            formUrl: formUrl,
          },
        }).then(() => {
          Design.destroy({
            where: {
              formUrl: formUrl,
            },
          }).then(() => {
            Response.destroy({
              where: {
                formUrl: formUrl,
              },
            }).then(() => {
              Attribution.destroy({
                where: {
                  formUrl: formUrl,
                },
              }).then(() => {
                Thank.destroy({
                  where: {
                    formUrl: formUrl,
                  },
                }).then(() => {
                  Testimonial.destroy({
                    where: {
                      url: formUrl,
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
      });
    });
  });
};
