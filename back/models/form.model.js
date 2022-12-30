module.exports = (sequelize, Sequelize) => {
  const Form = sequelize.define("forms", {
    projectId: {
      type: Sequelize.INTEGER,
    },
    formUrl: {
      type: Sequelize.STRING,
    },
    formName: {
      type: Sequelize.STRING,
    },
    response: {
      type: Sequelize.INTEGER,
    },
    projectId: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
  });

  return Form;
};
