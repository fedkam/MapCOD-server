var express = require("express");
var router = express.Router();

var district_controller = require('../controllers/district-controller');


router.get("/getDistrictDataFromServerFile", function(req, res, next) {
	let jsonData = require('./Files/Data.json');
	res.json(jsonData);
});

router.get("/getDistrictDataFromMongoDB", district_controller.list_district_to_client);

module.exports = router;
