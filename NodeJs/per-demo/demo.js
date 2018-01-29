var express = require('express');
var Sequelize = require('sequelize');
var config = require('./config.json');
var bodyParser = require('body-parser');

var password = config.password ? config.password : null;

var sequelize = new Sequelize(
    config.database,
    config.user,
    config.password, {
        logging: console.log,
        define: {
            timestamps: false
        }
    }
);

var app = express();
var port = 6000;
var router = express.Router(); // will help in adding routes
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// var userModel = sequelize.define('users', { //define your model
//     "firstName": Sequelize.INTEGER,
//     "lastName": Sequelize.INTEGER
// });

app.use('/api', router); //this will add routing to your api.
//your api endpoint  localhost:3000/api/books

router.get('/users', function(req, res) {
    userModel.findAll().
    then(function(users) {
        res.status(200).json(users);
    }, function(error) {
        res.status(500).send(error);
    });
});
router.get('/users/:id', function(req, res) {
    userModel.findAll({
        where: {
            id: req.params.id
        }
    }).
    then(function(users) {
        res.status(200).json(users);
    }, function(error) {
        res.status(500).send(error);
    });
});
// router.post('/users', function(req, res) {
//     console.log(req.body);
//     var data = {
//         "firstName": req.body.firstName,
//         "lastName": req.body.lastName
//     };

//     userModel.create(data).
//     then(function(users) {
//         res.status(200).json(users);
//     }, function(error) {
//         res.status(500).send(error);
//     });
// });
// router.put('/users/:id', function(req, res) {
//     var data = {
//         id: req.params.id,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName
//     };

//     userModel.update(data, {
//         where: {
//             id: data.id
//         }
//     }).
//     then(function(users) {
//         res.status(200).json(users);
//     }, function(error) {
//         res.status(500).send(error);
//     });
// });

// router.delete('/users/:id', function(req, res) {
//     var data = {
//         id: req.params.id
//     };

//     userModel.destroy({
//         where: {

//             id: data.id

//         }
//     }).
//     then(function(users) {
//         res.status(200).json(users);
//     }, function(error) {
//         res.status(500).send(error);
//     });
// });


app.listen(port, function() {

});
console.log('my api is running on port:' + port);