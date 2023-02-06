module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("projects", {
    name: {
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    url: {
      type: Sequelize.STRING,
    },
  });

  return Project;
};
