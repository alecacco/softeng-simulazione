exports.getThingById = function(req,res) {	
	json = [];
	json.push('potato '+ req.params.thing);
	res.status(200);
	res.json(json);
}