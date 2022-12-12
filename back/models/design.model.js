module.exports = (sequelize, Sequelize) => {
  const Design = sequelize.define("design", {
    formUrl: {
      type: Sequelize.STRING,
    },
    logoUrl: {
      type: Sequelize.STRING,
    },
    pColor: {
      type: Sequelize.STRING,
    },
    bColor: {
      type: Sequelize.STRING,
    },
  });

  return Design;
};
