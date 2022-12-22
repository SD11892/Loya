module.exports = (sequelize, Sequelize) => {
  const Wall = sequelize.define("wall", {
    url: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    theme: {
      type: Sequelize.INTEGER,
    },
    pColor: {
      type: Sequelize.STRING,
    },
    key: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.STRING,
    },
    pTitle: {
      type: Sequelize.STRING,
    },
    subTitle: {
      type: Sequelize.STRING,
    },
    ctaTitle: {
      type: Sequelize.STRING,
    },
    ctaUrl: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB,
    },
    fileName: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
  });

  return Wall;
};
