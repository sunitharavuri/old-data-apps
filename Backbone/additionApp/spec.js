
describe('AdditionModel', function() {
    it(' model should be defined', function() {
        expect(AdditionModel).toBeDefined();
    });

    it(' model can be instantiated', function() {
        var addition = new AdditionModel();
        expect(addition).not.toBeNull();
        
    });
    it('calculateSum method tobe defined',function(){
        var addition = new AdditionModel();
        expect(addition.calculateSum).toBeDefined();
    })
    
    it('Can be created with default values for its attributes.', function() {
        var addition = new AdditionModel();
        expect(addition.get('first_number')).toBeNull;
        expect(addition.get('first_number')).toBeNull;
    });
    it('Will set passed attributes on the model instance when created.', function() {
        var addition = new AdditionModel({first_number:"10",second_number:"20"});
        
        expect(addition.get('first_number')).toBe("10");
        expect(addition.get('second_number')).toBe("20");
    });
});

describe('AdditionView', function() {
  
    it(' view should be defined', function() {
        expect(AdditionView).toBeDefined();
    });
    it('render method tobe defined',function(){
            var additionview = new AdditionView();
            expect(additionview.render).toBeDefined();
        })
});
describe("AdditionView", function() {
    
      beforeEach(function() {
        this.view = new AdditionView();
      });
    
      describe(" view Instantiation", function() {
    
        it(' view should be defined', function() {
            expect(AdditionView).toBeDefined();
        });
        
    
      });
      describe("Template", function() {
            
              beforeEach(function() {
                this.view.render();
              });
            
    //           it("has the correct URL", function() {
    //             expect($(this.view.el).find('body'))
    //               .toHaveText('First Number');
    //           });
            
              it("appending template in html ", function() {
                expect($(this.view.el).find('body'))
                  .toHaveText('');
              });
            
            });
        
     
    });
    