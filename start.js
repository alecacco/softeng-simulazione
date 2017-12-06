const express = require('express');
const routerModule = require('./router.js')

const app = express();

var router = express.Router();
router.get('/:thing',routerModule.getThingById);
// Register our router on /news
app.use('/thing', router);

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
