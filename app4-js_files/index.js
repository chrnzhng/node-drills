const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainCtrl');

const app = express();


const port = 3000;

app.use(bodyParser.json())

app.get('/api/data', mainCtrl.getData)

app.post('/api/data/new', mainCtrl.postData)

app.listen(port, console.log(`Listening on port ${port}`))