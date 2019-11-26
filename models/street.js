var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StreetSchema = new Schema(
  {
    name: {type: String, required: true},
    level: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
  }
);

// Virtual for book's URL
StreetSchema
.virtual('url')
.get(function () {
  return '/trasferdata/street/' + this._id;
});

//Export model
module.exports = mongoose.model('Street', StreetSchema);
