var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VillageSchema = new Schema(
  {
    name: {type: String, required: true},
    level: {type: String, required: true},
    items: [{type: Schema.ObjectId, ref: 'Street', required: true}]
  }
);

// Virtual for book's URL
VillageSchema
.virtual('url')
.get(function () {
  return '/trasferdata/village/' + this._id;
});

//Export model
module.exports = mongoose.model('Village', VillageSchema);
