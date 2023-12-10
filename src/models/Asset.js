// ASSET MODEL

import mongoose from 'mongoose';

const { Schema } = mongoose;

const AssetSchema = new Schema({
  assetName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  sn: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  assignedTo: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
  },
});

const Asset = mongoose.model('Asset', AssetSchema);

export default Asset;
