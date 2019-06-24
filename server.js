var express = require('express');

var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));

// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve('./public/dist/public/index.html'))
// });

app.listen(8000, function(){
    console.log('Listening on port 8000')
})

require('./server/config/mongoose');
require('./server/config/routes')(app);