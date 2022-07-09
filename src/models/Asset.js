// ASSET MODEL

import mongoose from 'mongoose';

const { Schema } = mongoose;

const AssetSchema = new Schema({
  house: {
    type: String,
    required: true,
  },
  auditor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  department: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
  },
  maintenance: {
    findings: [String],
    max: { type: Number, default: 16 },
    score: { type: Number, default: 100 },
  },
});

const Asset = mongoose.model('Asset', AssetSchema);

export default Asset;
