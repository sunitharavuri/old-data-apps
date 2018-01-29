(function() {
    
    window.App = {//name spacing
        Models: {},
        Collections: {},
        Views: {}
    };
    //template
    window.template = function(id) {
        return _.template( $('#' + id).html() );
    };
    
    
    // Person Model
    App.Models.Person = Backbone.Model.extend({
        defaults: {
            name: 'Guest User',
            age: 30,
            occupation: 'worker'
        }
    });
    
    // A List of People(Collections)
    App.Collections.People = Backbone.Collection.extend({
        model: App.Models.Person
    });
    
    
    // View for all people
    App.Views.People = Backbone.View.extend({
        tagName: 'ul',
        
        initialize: function() {
            this.collection.on('add', this.addOne, this);//listeners/anouncers for the collection on add..
        },
        
    // refactored render method...
	render: function(){
		this.collection.each(this.addOne, this);
		return this;
	},
   // called from render method of collection view..
        addOne: function(person) {
            var personView = new App.Views.Person({ model: person });
            this.$el.append(personView.render().el);
        }
    });
    
    // The View for a Person
    App.Views.Person = Backbone.View.extend({
        tagName: 'li',
    
        template: template('personTemplate'),	
        
        initialize: function(){
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
        // Adding a destroy announcer..
        },
        
        events: {
         'click .edit' : 'editPerson',
         'click .delete' : 'DestroyPerson'	//Binding a Destroy for the listing to click event on delete button..
        },
        
        editPerson: function(){
            var newName = prompt("Please enter the new name", this.model.get('name'));
            if (!newName) return;
            this.model.set('name', newName);
        },
        
        DestroyPerson: function(){//calling backbone js destroy function to destroy that model object
            this.model.destroy();
        },
        
        remove: function(){
            this.$el.remove();//Calling Jquery remove function to remove that HTML li tag element..
        },
        
        render: function() {
            this.$el.html( this.template(this.model.toJSON()) );
            return this;
        }
    });
    
    
    App.Views.AddPerson = Backbone.View.extend({
        el: '#addPerson',
    
        events: {
            'submit': 'submit'// binding submit click to submit function..
        },
    
        submit: function(e) {
            e.preventDefault(); // preventing default submission..
            var newPersonName = $(e.currentTarget).find('input[type=text]').val(); // getting new form values..
            var person = new App.Models.Person({ name: newPersonName });// creating a new person object..
            this.collection.add(person);// adding this to current collection..
    
        }
    
    });
    
    //collection data hard-coded 
    var peopleCollection = new App.Collections.People([
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
            occupation: 'web developer'
        },
        {
            name: 'Nareen ',
            age: 30,
            occupation: 'UI Developer'
        },
       
        {
            age: 25,
            occupation: 'web designer'
        }
    ]);
    var addPersonView = new App.Views.AddPerson({ collection: peopleCollection });

    peopleView = new App.Views.People({ collection: peopleCollection });
    
    $(document.body).append(peopleView.render().el);//DOM rendering 
    })();