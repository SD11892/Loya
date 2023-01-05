module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define("tag", {
    tag_name: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
  });
  return Tag;
};
