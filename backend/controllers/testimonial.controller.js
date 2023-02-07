const db = require('../models');
const Outscraper = require('outscraper');
const fs = require('fs');
const Form = db.form;
const Testimonial = db.testimonial;
const client = new Outscraper(
  'Z29vZ2xlLW9hdXRoMnwxMDMyNDg4NDYzMjYzNDM5MjEyMTF8NGZjZWI0YjU3MA'
);

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const data = req.query.info;
  if (req.file !== undefined) {
    if (data.url !== undefined) {
      Form.findAll({
        where: {
          formUrl: data.url,
        },
      })
        .then((value) => {
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
                video: data.video,
                data: fs.readFileSync('../upload/' + req.file.filename),
                index: data.index,
                note: data.note,
                projectId: Number(data.projectId),
                userId: Number(data.userId),
              });
            })
            .then((r) => {
              res.json({ r });
            });
        })
        .catch((err) => {
          console.log('CreateTestimonialErr=', err);
        });
    } else {
      Testimonial.create({
        imageUrl: data.imageUrl,
        importDate: data.importDate,
        key: data.key.toString(),
        value: data.value.toString(),
        content: data.content,
        status: 0,
        type: data.type,
        note: data.note,
        name: data.name,
        video: data.video,
        rating: data.rating,
        data: fs.readFileSync('../upload/' + req.file.filename),
        index: data.index,
        projectId: data.projectId,
        userId: data.userId,
      })
        .then((result) => {
          res.json({ result });
        })
        .catch((err) => {
          console.log('CreateTestimonialErr=', err);
        });
    }
  } else {
    if (data.url !== undefined) {
      console.log(data.url);
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
            content: data.content,
            url: data.url,
            key: data.key.toString(),
            value: data.value.toString(),
            content: data.content,
            status: 0,
            rating: data.rating,
            note: data.note,
            index: data.index,
            video: data.video,
            projectId: data.projectId,
            userId: data.userId,
          })
            .then((r) => {
              res.json({ r });
            })
            .catch((err) => {
              console.log('CreateTestimonialErr=', err);
            });
        });
      });
    } else {
      Testimonial.create({
        imageUrl: data.imageUrl,
        importDate: data.importDate,
        key: data.key.toString(),
        value: data.value.toString(),
        content: data.content,
        note: data.note,
        status: 0,
        index: data.index,
        video: data.video,
        rating: data.rating,
        projectId: data.projectId,
        userId: data.userId,
      })
        .then((result) => {
          res.json({ result });
        })
        .catch((err) => {
          console.log('CreateTestimonialErr=', err);
        });
    }
  }
};
exports.update = (req, res) => {
  const data = req.query.info;
  if (req.file !== undefined) {
    Testimonial.update(
      {
        url: data.url,
        key: typeof data.key === 'string' ? data.key : data.key.toString(),
        value:
          typeof data.value === 'string' ? data.value : data.value.toString(),
        content: data.content,
        status: data.status,
        type: data.type,
        name: data.name,
        rating: data.rating,
        data: fs.readFileSync('../upload/' + req.file.filename),
        index: data.index,
      },
      {
        where: {
          id: data.id,
        },
      }
    ).then((result) => {
      res.json({ code: 200, data: result, message: 'success' });
    });
  } else {
    Testimonial.update(
      {
        url: data.url,
        key: typeof data.key === 'string' ? data.key : data.key.toString(),
        value:
          typeof data.value === 'string' ? data.value : data.value.toString(),
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
  console.log('data=====', data);
  if (data.searchData) {
    if (data.searchData === 'google') {
      Testimonial.findAll({
        where: {
          userId: Number(data.userId),
          projectId: Number(data.projectId),
          note: null,
        },
        order: [['index', 'ASC']],
      })
        .then((testimonials) => {
          if (!testimonials) {
            return res.status(200).send({ message: 'Empty' });
          } else {
            res.status(200).send({ testimonials });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    } else if (data.searchData === 'facebook') {
      Testimonial.findAll({
        where: {
          userId: data.userId,
          projectId: data.projectId,
          note: 'facebook',
        },
        order: [['index', 'ASC']],
      })
        .then((testimonials) => {
          if (!testimonials) {
            return res.status(200).send({ message: 'Empty' });
          } else {
            res.status(200).send({ testimonials });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    } else if (data.searchData === 'text') {
      Testimonial.findAll({
        where: {
          userId: data.userId,
          projectId: data.projectId,
          note: 'text',
        },
        order: [['index', 'ASC']],
      })
        .then((testimonials) => {
          if (!testimonials) {
            return res.status(200).send({ message: 'Empty' });
          } else {
            res.status(200).send({ testimonials });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    } else if (data.searchData === 'video') {
      Testimonial.findAll({
        where: {
          userId: data.userId,
          projectId: data.projectId,
          note: 'video',
        },
        order: [['index', 'ASC']],
      })
        .then((testimonials) => {
          if (!testimonials) {
            return res.status(200).send({ message: 'Empty' });
          } else {
            res.status(200).send({ testimonials });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    } else if (data.searchData.includes('rating===') === true) {
      let rating = data.searchData.slice(-1).replace(/["']/g, '');
      Testimonial.findAll({
        where: {
          userId: data.userId,
          projectId: data.projectId,
          rating: rating,
        },
        order: [['index', 'ASC']],
      })
        .then((testimonials) => {
          if (!testimonials) {
            return res.status(200).send({ message: 'Empty' });
          } else {
            res.status(200).send({ testimonials });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    } else {
      Testimonial.findAll({
        where: {
          userId: data.userId,
          projectId: data.projectId,
          [Op.or]: [
            {
              content: { [Op.like]: `%${data.searchData}%` },
            },
            {
              value: { [Op.like]: `%${data.searchData}%` },
            },
          ],
        },
        order: [['index', 'ASC']],
      })
        .then((testimonials) => {
          if (!testimonials) {
            return res.status(200).send({ message: 'Empty' });
          } else {
            res.status(200).send({ testimonials });
          }
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }
  } else {
    Testimonial.findAll({
      where: {
        userId: data.userId,
        projectId: data.projectId,
      },
      order: [['index', 'ASC']],
    })
      .then((testimonials) => {
        if (!testimonials) {
          return res.status(200).send({ message: 'Empty' });
        } else {
          res.status(200).send({ testimonials });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
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
          res.json({ result });
        });
      });
    } else {
      Testimonial.destroy({
        where: {
          Id: Id,
        },
      }).then((result) => {
        res.json({ result });
      });
    }
  });
};

exports.getByUrl = (req, res) => {
  const formUrl = req.params.url.replace(':', '');
  const info = {
    key: [],
    value: [],
    content: '',
    data: '',
    rating: 0,
  };
  Testimonial.findAll({
    where: {
      url: formUrl,
    },
  })
    .then((fdata) => {
      info.key = fdata.key;
      info.value = fdata.value;
      info.content = fdata.content;
      info.data = fdata.data;
      info.rating = fdata.rating;
      res.status(200).send({ data: info });
    })
    .catch((err) => {
      console.log('err=', err);
      res.status(500).send({ message: err.message });
    });
};

exports.getById = (req, res) => {
  const id = req.query.id;
  Testimonial.findOne({
    where: {
      Id: id,
    },
  })
    .then((fdata) => {
      res.status(200).send({ fdata });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.uploadVideo = (req, res) => {
  const data = req.query.info;
  if (req.file !== undefined) {
    fs.readFileSync('../upload/' + req.file.filename);
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
      res.json({ code: 200, data: result, message: 'success' });
    });
  } else {
    res.json({ code: 404, message: 'Require a video file' });
  }
};

exports.importAll = async (req, res) => {
  const array = req.query.array;
  const length = Object.keys(array).length;
  for (var i = 0; i < length; i++) {
    await Testimonial.create({
      value: array[i].name,
      key: '',
      content: array[i].review,
      status: 0,
      rating: array[i].rating,
      imageUrl: array[i].imageUrl,
      importDate: array[i].importDate,
      index: array[i].index,
      projectId: array[i].projectId,
      userId: array[i].userId,
    });
  }
  res.json({ code: 200, message: 'imported testimonials exactly!' });
};

exports.importHistory = (req, res) => {
  const data = req.query;
  Testimonial.findAll({
    where: {
      userId: data.userId,
      projectId: data.projectId,
    },
  })
    .then((testimonials) => {
      let imports = [];
      for (var i = 0; i < testimonials.length; i++) {
        if (testimonials[i].url === null) {
          imports.push(testimonials[i]);
        }
      }
      res.status(200).send({ imports });
    })
    .catch((err) => {
      console.log('importHistory=', err);
    });
};

exports.googleReview = (req, res) => {
  const placeId = req.query.info;
  const reviews = [];
    client.googleMapsReviews(
      [placeId],
      limit=0 // limit of palces per each query
    ).then(response => {
      response.forEach(place => {
        place.reviews_data.forEach(review => {
          reviews.push(review);
        });
        res.json({code:200, message:'Import google reviews using outscraper', data:reviews});
      });
    });
};
