var express = require("express");
var router = express.Router();

var district_controller = require('../controllers/district-controller');


router.get("/", function(req, res, next) {
	let jsonData = require('./Files/Data.json');
	console.log("router.get()" + jsonData.rowsData[0].name);
	res.json(jsonData);
});

router.get("/getdistrictdatamongo", district_controller.list_district_to_client);

module.exports = router;
