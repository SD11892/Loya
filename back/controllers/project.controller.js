const db = require("../models");
const fs = require("fs");
const { query } = require("express");
const Project = db.project;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const data = req.query;
  Project.create({
    url: data.url,
    name: data.name,
    userId: data.id,
  }).then((result) => {
    const projects = result.dataValues;
    res.json({ projects });
  });
};

exports.getById = (req, res) => {
  const id = req.params.id.replace(":", "");
  Project.findAll({
    where: {
      Id: id,
    },
  })
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      res.json({ err });
    });
};

exports.getAll = (req, res) => {
  const data = req.query;
  Project.findAll({
    where: {
      userId: data.userId,
    },
  })
    .then((projects) => {
      if (!projects) {
        console.log("Forms Not Found");
        return res.status(200).send({ message: "Empty" });
      } else {
        res.status(200).send({ projects });
      }
    })
    .catch((err) => {
      console.log("err=", err);
      res.status(500).send({ message: err.message });
    });
};
