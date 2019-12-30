var District = require('../models/district');
//var Info = require('../models/info');


exports.list_district_to_client = function(req, res, next) {
  District.find({}, 'name')
    .populate({
      path:'items',
      populate: {path:'items'}})
    .exec(function (err, list_district) {
      if (err) { return next(err); }
       //res.render('districts-view', { title: 'District list', district_list: list_district }); // view on server
       res.json({rowsData:list_district}); // transfer to client
    });
};

exports.list_info_to_client = function(req, res, next) {
  
};
