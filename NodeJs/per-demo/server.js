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

