
 var AdditionModel = Backbone.Model.extend({
  default:{
      first_number:null,
      second_number:null

  },
  calculateSum: function() {
        return this.get('first_number') + this.get('second_number');
     
      }
      
    });   
var AdditionView = Backbone.View.extend({

    template: _.template('\
    First Number: <%= first_number %>.\
    Second Number: <%= second_number %>.\
    Result: <%= sum %>.\
  '),

  render: function () {
    
          
          var html = this.template({
    
           
            first_number: this.model.get('first_number'),
            second_number: this.model.get('second_number'),
    
           
            sum: this.model. calculateSum()
        });
               $(this.el).html(html);
            }
            

      });
      var additionModel = new AdditionModel({
        first_number: 2,
        second_number: 3
      });
