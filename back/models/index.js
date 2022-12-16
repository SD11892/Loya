const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);

db.form = require("../models/form.model.js")(sequelize, Sequelize);
db.design = require("../models/design.model.js")(sequelize, Sequelize);
db.welcome = require("../models/welcome.model.js")(sequelize, Sequelize);
db.response = require("../models/response.model.js")(sequelize, Sequelize);
db.testimonial = require("../models/testimonial.model.js")(
  sequelize,
  Sequelize
);
db.attribution = require("../models/attribution.model.js")(
  sequelize,
  Sequelize
);
db.thank = require("../models/thank.model.js")(sequelize, Sequelize);

module.exports = db;
