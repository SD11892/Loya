module.exports = (sequelize, Sequelize) => {
  const TestimonialForm = sequelize.define("testforms", {
    url: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    spacing: {
      type: Sequelize.STRING,
    },
    shadow: {
      type: Sequelize.STRING,
    },
    border: {
      type: Sequelize.STRING,
    },
    bgColor: {
      type: Sequelize.STRING,
    },
    blColor: {
      type: Sequelize.STRING,
    },
    bfColor: {
      type: Sequelize.STRING,
    },
    fgColor: {
      type: Sequelize.STRING,
    },
    txtColor: {
      type: Sequelize.STRING,
    },
    ratingColor: {
      type: Sequelize.STRING,
    },
    theme: {
      type: Sequelize.INTEGER,
    },
  });

  return TestimonialForm;
};
