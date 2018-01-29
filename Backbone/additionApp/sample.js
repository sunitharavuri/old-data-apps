

//   $(function(){
    
   var Credentials = Backbone.Model.extend({
    default:{
     number1:0,
     number2:0

      },
  });
  var AddView = Backbone.View.extend({
    el: $("#add-form"),
    events: {
      "click #add": "add"
    },
    initialize: function(){
      var self = this;
      this.number1 = $("#num1");
      this.number2= $("#num2");
      this.number1.change(function(e){
        self.model.set({number1: $(e.currentTarget).val()});
        
      });
      this.number2.change(function(e){
        self.model.set({number2: $(e.currentTarget).val()});
      });
    },
    add: function(){
        var sum=0;
      var num_1= this.model.get('number1');
      var num_2 = this.model.get('number2');
         sum = parseInt(num_1)+parseInt(num_2);
      alert("adddition of  two numbers is"+sum);
    //   return false;
    }
  });
//   window.addView = new AddView({model: new Credentials()});
// });