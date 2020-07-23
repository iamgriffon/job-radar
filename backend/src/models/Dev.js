const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const FreelaDevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  fields: {
    type: [String],
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  whatsapp: {
    type: Number,
    required: true,
  },
  bio: String,
  avatar_url: String,
  techs: {
    type: [String],
    required: true
  },
  location: {
    type: PointSchema,
    index: '2dsphere',
  }
});

module.exports = mongoose.model('Dev', FreelaDevSchema);