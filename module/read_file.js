	const fs = require("fs");
	var filePath;

	var readFilee = function(){
		let ret;
		ret = fs.readFile(filePath, function(error, data){
				return data;
			});
		return ret;
	};


	module.exports = readFilee;