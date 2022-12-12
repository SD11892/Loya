const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  console.log("createAction Here?");
  // Save User to Database
  User.create({
    username: req.query.username,
    email: req.query.email,
    password: bcrypt.hashSync(req.query.password, 8),
  })
    .then((user) => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.verify = (req, res) => {
  User.findOne({
    where: {
      email: req.query.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    } else {
      res.status(200).send({
        message: "No use",
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.query.email,
    },
  })
    .then((user) => {
      console.log("user=", user);
      if (!user) {
        console.log("User Not Found");
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.query.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};
