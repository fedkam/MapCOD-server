var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
	let jsonData = require('./Files/Data.json');
	console.log("router.get()" + jsonData.rowsData[0].name);
	res.json(jsonData);
});


module.exports = router;
