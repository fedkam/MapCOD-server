var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
	let jsonData = require('./Files/Data.json');
	//console.log(jsonData.Mso[0][1]);
	res.json(jsonData);
});


module.exports = router;
