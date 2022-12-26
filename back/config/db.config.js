module.exports = {
  HOST: "localhost",
  USER: "dev",
  PASSWORD: "",
  DB: "loya",
  PORT: "3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
