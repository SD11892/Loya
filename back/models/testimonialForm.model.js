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
    txtColor: {
      type: Sequelize.STRING,
    },
    ratingColor: {
      type: Sequelize.STRING,
    },
  });

  return TestimonialForm;
};
