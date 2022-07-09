import { Asset } from '../models';

// Defining methods for the assetsController
export default {
  getAll: (req, res) => {
    Asset.find(req.query)
      .sort({ _id: -1 })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    Asset.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: (req, res) => {
    Asset.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    Asset.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: (req, res) => {
    Asset.findById({ _id: req.params.id })
      .then((data) => data.remove())
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
