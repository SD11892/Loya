const db = require('../models');
const config = require('../config/auth.config');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  '382447144454-18kdqo71vffauq6c6q2t53bi8u7artae.apps.googleusercontent.com'
);
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.query.username,
    email: req.query.email,
    password: bcrypt.hashSync(req.query.password, 8),
    upgrade: 'free',
  })
    .then((user) => {
      res.json({
        message: 'User was registered successfully!',
        user: { user },
      });
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
        message: 'Failed! Email is already in use!',
      });
      return;
    } else {
      res.status(200).send({
        message: 'No use',
      });
    }
  });
};

exports.update = (req, res) => {
  User.update(
    {
      password: bcrypt.hashSync(req.query.password, 8),
    },
    {
      where: {
        email: req.query.email,
      },
    }
  ).then(() => {
    res.status(200).send({ CODE: 200, message: 'success' });
  });
};
exports.account = (req, res) => {
  User.update(
    {
      username: req.query.username,
    },
    {
      where: {
        email: req.query.email,
      },
    }
  ).then(() => {
    res.json({ CODE: 200, message: 'success' });
  });
};

exports.upgrade = (req, res) => {
  console.log(req);
  User.update(
    {
      upgrade: req.query.level,
    },
    {
      where: {
        id: req.query.id,
      },
    }
  ).then(() => {
    res.json({ message: 'success' });
  });
};

exports.google = async (req, res) => {
  console.log('here=', req);
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      '382447144454-18kdqo71vffauq6c6q2t53bi8u7artae.apps.googleusercontent.com',
  });
  const { name, email } = ticket.getPayload();
  console.log('payload=', ticket.getPayload());
  const user = await User.upsert({
    where: { email: email },
    update: { name },
    create: { name, email },
  });
  res.status(201);
  res.json(user);
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.query.email,
    },
  })
    .then((user) => {
      console.log('user=', user);
      if (!user) {
        console.log('User Not Found');
        return res.status(404).send({ message: 'User Not found.' });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.query.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
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
        upgrade: user.upgrade,
        accessToken: token,
      });
    })
    .catch((err) => {
      console.log('err=', err);
      res.status(500).send({ message: err.message });
    });
};

exports.getByGmail = (req, res) => {
  console.log('++++++++++++++++++++++++++++++++++++++++');
  User.findOne({
    where: {
      email: req.query.gmail,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(200).send({ message: 'have to register', data: 0 });
      } else {
        res.status(201).send({ message: 'found', data: user });
      }
    })
    .catch((err) => {
      console.log('googleSinginErr=', err);
    });
};
