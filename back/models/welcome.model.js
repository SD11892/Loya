module.exports = (sequelize, Sequelize) => {
  const Welcome = sequelize.define("welcome", {
    formUrl: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
  });

  return Welcome;
};
