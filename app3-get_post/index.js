var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
const mainCtrl = require('./controllers/mainCtrl');

var app = express();
app.use(bodyParser.json());

app.get('/api/get', mainCtrl.getItems)
app.post('/api/post', mainCtrl.postItems)




app.listen(port, function() {
	console.log('Listening on port',port);
})

