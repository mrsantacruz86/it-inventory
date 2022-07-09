// USER MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  acountCreated: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    enum: ["active", "inactive", "deleted"],
    default: "active"
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
