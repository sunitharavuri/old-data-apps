module.exports = Backbone.Model.extend({
    defaults: {
        name: null,
        tel: null,
        email: null,
        avatar: null,
        // points:10
      },
    
      initialize: function() {
        this.set('avatar', _.random(1, 15) + '.jpg');
      }
});
