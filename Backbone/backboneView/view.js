var Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest User',
		age: 23,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
	tagName: 'li',// displays as list 

	initialize: function() {//initializing view (initializes when view instantiated )
		this.render();
	},

	render: function() { //rendering view 
		//here $el is jquery object ..used to render html content
		this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
	}
});


//In console ,operations


var person = new Person;
var personView = new PersonView({ model: person }); //
personView.el;
// <li> Guest User (23) -worker<li>
//Creating new person and diplaying it in view ...
var person = new Person({name: "Mohit Jain", age: 25, occupation: "Software Developer"})
var personView = new PersonView({ model: person });
personView.el;
//<li>​Mohit Jain (25) - Software Developer​</li>​