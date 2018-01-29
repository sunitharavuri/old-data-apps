ContactManager.Models.Contact = Backbone.Model.extend({
    defaults: {
      name: null,
      tel: null,
      email: null,
      image: null
    },
  
    initialize: function() {
      this.set('image', _.random(1, 15) + '.jpg');
    }
  });