module.exports = (sequelize, Sequelize) => {
  const Design = sequelize.define("design", {
    formUrl: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
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
