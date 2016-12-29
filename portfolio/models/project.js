const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  title: { type: String },
  about: { type: String },
  githubLink: { type: String },
  herokuLink: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Project', projectsSchema);
