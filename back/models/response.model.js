module.exports = (sequelize, Sequelize) => {
  const Response = sequelize.define("response", {
    formUrl: {
      type: Sequelize.STRING,
    },
    prompt: {
      type: Sequelize.STRING,
    },
  });

  return Response;
};
