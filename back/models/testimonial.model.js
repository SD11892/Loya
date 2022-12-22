module.exports = (sequelize, Sequelize) => {
  const Testimonial = sequelize.define("testimonials", {
    url: {
      type: Sequelize.STRING,
    },
    key: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB,
    },
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    index: {
      type: Sequelize.INTEGER,
    },
  });

  return Testimonial;
};
