const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  url: String

});

module.exports = mongoose.model('company', companySchema);
