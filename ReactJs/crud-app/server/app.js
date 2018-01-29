var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

// Mongoose connection with mongodb
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://<uname>:<pwd>@ds139322.mlab.com:39322/aufinancex')
//     .then(() => { // if all is ok we will be here
//       console.log('Start');
//     })
//     .catch(err => { // if error we will be here
//         console.error('App starting error:', err.stack);
//         process.exit(1);
//     });
    mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/aufinancex', { useMongoClient: true });

mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb   @ 27017');
});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection:' + err);
    }

});


// Required application specific custom router module
var itemRouter = require('./itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});