

var Animal = Backbone.Model.extend({//creating model 
  defaults: {//object literal 
    name: 'Fido',
    color: 'black',
    sound: 'woof'
  },
  validate: function(attrs, options){//validate function
    if (!attrs.name){
        alert('Your animal must have a name!');
    }
    if (attrs.name.length < 2){
        alert('Your animal\'s name must have more than one letter!');
    }
  },
  sleep: function(){
    alert(this.get('name') + ' is sleeping.');
  }
});

// var dog =new Animal({})//we can set parameters
var dog = new Animal({name: 'Biscuit', color: 'brown', sound: 'arf'});