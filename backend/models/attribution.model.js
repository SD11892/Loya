module.exports = (sequelize, Sequelize) => {
  const Attribution = sequelize.define("attribution", {
    formUrl: {
      type: Sequelize.STRING,
    },
    key: {
      type: Sequelize.STRING,
    },
  });

  return Attribution;
};
