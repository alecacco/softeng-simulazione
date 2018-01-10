var DBMM = require("../database_simulation/db.js" );

function getConsoleList(res){
	console.log("show all consoles")
	res.json(DBMM.getDatabase().console);
}

function addConsole(req,res){
	consoleName = req.body.name;
	consoleNick = req.body.nick;
	if (consoleName == undefined) 
		res.json(["Console name required!"]);
	else {
		DBMM.addToDatabase('console',{name: consoleName,nick: consoleNick});
		res.json(["Console successfully added to database."]);		
	}
}

function editNickname(req,res){
	consoleName = req.body.name;
	consoleNick = req.body.nick;
	if (consoleName == undefined) 
		res.json(["Console name and nickname are both required!"]);
	else {
		if (DBMM.editConsole(consoleName,consoleNick))
			res.json(["Console successfully edited."]);		
		else
			res.json(["ERROR: Console name not found!"]);		
	}
}

exports.editConsole = function(req,res){
	editNickname(req,res);
}

exports.getConsoleList = function (req, res){
	getConsoleList(res);
}

exports.addConsole = function (req, res){
	addConsole(req,res);
}
