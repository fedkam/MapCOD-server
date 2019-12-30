var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Village = require('../models/village');


var DistrictSchema = new Schema(
  {
    name: {type: String, required: true},
    level: {type: String, required: true},
    items: [{type: Schema.ObjectId, ref: 'Village', required: true}]
  }
);

// Virtual for book's URL
DistrictSchema
.virtual('url')
.get(function () {
  return '/trasferdata/district/' + this._id;
});

//Export model
module.exports = mongoose.model('District', DistrictSchema);
