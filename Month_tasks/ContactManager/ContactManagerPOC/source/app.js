// console.log("app running");
// var i="hello";
// console.log(i+i);
var _ = require('underscore');
var $ = require('jquery');
require('backbone');
var AppView = require('./app.view')
$(function() {
  var view = new AppView({
    el: 'app'
  });
});