//Person Model
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 30,
        occupation: 'worker'
    }
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});
// View for all people
// var PeopleView = Backbone.View.extend({
//     tagName: 'ul',

//     initialize: function(){
//         console.log(this.collection);
//     },

//    // loop over all the person objects in the peopleCollection
// render: function(){
//     console.log(this); // reference to collection object..
//     this.collection.each(function(person){
        
//         // Creating a view for each person.
//         var personView = new PersonView({ model: person });
            
//     });
//     //   (or)
// },
// // loop over all the person objects in the peopleCollection
// render: function(){
//     this.collection.each(function(person){
//             var personView = new PersonView({ model: person });
//             console.log(personView.el);
//     }, this);    // at this point we are passing context.. Underscore provides this functionality..
// }

// });
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	render: function() {
		this.collection.each(function(person) {
			var personView = new PersonView({ model: person });
			this.$el.append(personView.el);
		}, this);

		return this;
	}
});

// The View for a Person
var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template( $('#personTemplate').html()),

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html( this.template(this.model.toJSON()));
    }
});
var peopleCollection = new PeopleCollection([
    {
        name: 'Mohit Jain',
        age: 26
    },
    {
        name: 'Taroon Tyagi',
        age: 25,
        occupation: 'web designer'
    },
    {
        name: 'Rahul Narang',
        age: 26,
        occupation: 'Java Developer'
    }
]);
// on console

//var peopleView = new PeopleView({ collection: peopleCollection });
//peopleView.render();
//peopleView.el;

///in console 

// peopleView.render();
// G.d {cid: "view3", collection: G.d, options: {…}, $el: init(1), el: ul}$el: init [ul, context: ul]cid: "view3"collection: G.d {length: 3, models: Array(3), _byId: {…}, _byCid: {…}}el: uloptions: {collection: G.d}__proto__: g.View
// peopleView.el;
// <ul>​<li>​<strong>​Mohit Jain​</strong>​" (26) - worker
//         "</li>​<li>​<strong>​Taroon Tyagi​</strong>​" (25) - web designer
//         "</li>​<li>​<strong>​Rahul Narang​</strong>​" (26) - Java Developer
//         "</li>​</ul>​
