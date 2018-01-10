database = {console : [], accessories: []}


module.exports = {	
	getDatabase: function (){
		return database;
	},
	addToDatabase: function (key,value){
		database[key].push(value);
	},
	editConsole: function (key,value){
		for (var i = 0, len = database.console.length; i < len; i++) {
 	 		console.log(database.console[i]);
			if (database.console[i]['name'] == key) {
				database.console[i]['nick'] = value;
				return true;
			}
		}
		return false;
	}
}