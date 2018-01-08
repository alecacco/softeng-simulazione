
function getConsoleList(){
	console.log("show all consoles")
}

function addConsole(req){
	console.log("added: ",req.body.name);
}

exports.getConsoleList = function (req, res, next){
	console.log("added: ",req);
	getConsoleList();
	next();
}

exports.addConsole = function (req, res, next){
	console.log("added: ",req.body);
	next();
	//addConsole(req);
}
