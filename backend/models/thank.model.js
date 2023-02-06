module.exports = (sequelize, Sequelize) => {
  const Thank = sequelize.define("thank", {
    formUrl: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
    call: {
      type: Sequelize.INTEGER,
    },
    text_btn: {
      type: Sequelize.STRING,
    },
    linkUrl: {
      type: Sequelize.STRING,
    },
    custom: {
      type: Sequelize.INTEGER,
    },
    directUrl: {
      type: Sequelize.STRING,
    },
  });

  return Thank;
};
