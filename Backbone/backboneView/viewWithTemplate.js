var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest Worker',
        age: 23,
        occupation: 'worker'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
//undesrscore method
    my_template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),
    //           (or)

    template: _.template( $('#personTemplate').html() ),//giving html element (#id) reference

    initialize: function(){
        this.render();
    },

    render: function(){//render method will call template via my_template and pass data to my_template
        //my_template will accepts the parameters and assign proper values and return to render.
        this.$el.html( this.my_template(this.model.toJSON()));
    }
});
//in console
var person = new Person;  // a person object created...
var personView = new PersonView({ model: person });//Model person has been passed to that personView object.
// So personView has access to the person object.
//personView constructor will call render method.
personView.el   // ---->; You can call this method and it will display the view..
//output........<li>​<strong>​Guest Worker​</strong>​" (23) - worker"</li>​

// **>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//template refering #id

{/* <script id="personTemplate" type="text/template">
	<strong><%= name %></strong> (<%= age %>) - <%= occupation %>
</script> */}


