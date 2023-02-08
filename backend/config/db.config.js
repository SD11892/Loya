module.exports = {
  HOST: '3.238.122.182',
  USER: 'dev',
  PASSWORD: '',
  DB: 'loya',
  PORT: '3306',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
