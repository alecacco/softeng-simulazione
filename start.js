const express = require('express');

const app = express();

// News router
var newsRouter = express.Router();
newsRouter.get('/:deptName',newsRoutes.getNewsByDepartment);
// Register our router on /news
app.use('/news', newsRouter);

// handle invalid requests and internal error
app.use((req, res, next) => {
	const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
    res.json({ error: { message: err.message } });
});

// Set the port number
app.set('port', process.env.PORT || 3000);
// Start the server
app.listen(app.get('port'));
console.log('Server started! Running on port: ' + app.get('port'));
