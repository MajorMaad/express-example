var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Message', new Schema({
  pseudo: {type: String, default: "Anonymous"},
  message: {type: String, default: ""},
  date: {type: Date, default: Date.now}
}));
