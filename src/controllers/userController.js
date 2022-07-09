// USER CONTROLLER

const {User} = require("../models");

module.exports = {
  getAll: (req, res) => {
    User
      .find(req.query)
      .sort({ number: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    User
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    User
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    User
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
