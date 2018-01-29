
describe('ContactManager.Models.Contact', function() {
    it(' model should be defined', function() {
        expect(ContactManager.Models.Contact).toBeDefined();
    });

    it(' model can be instantiated', function() {
        var contact = new ContactManager.Models.Contact();
        expect(contact).not.toBeNull();
    });
    beforeEach(function() {
        this.contact = new ContactManager.Models.Contact();
    });

    
    describe(' model  default values', function() {
        it(' should fail:has default value for the .name attribute', function() {
            expect(this.contact.get('name')).not.toBeNull();
        });
        it('should pass:has default value for the .name attribute', function() {
            expect(this.contact.get('name')).toBeNull();
        });
        it('should fail:has default value for the .tel attribute', function() {
            expect(this.contact.get('tel')).not.toBeNull();
        });

        it('should pass:has default value for the .tel attribute', function() {
            expect(this.contact.get('tel')).toBeNull();
        });
        it('should fail:has default value for the .email attribute', function() {
            expect(this.contact.get('email')).not.toBeNull();
        });
        it('should pass:has default value for the .email attribute', function() {
            expect(this.contact.get('email')).toBeNull();
        });
        it('should fail:has default value for the .image attribute', function() {
            expect(this.contact.get('avatar')).toBeNull();
        });
        it('should pass:has default value for the .image attribute', function() {
            expect(this.contact.get('avatar')).not.toBeNull();
        });
        
        it('Will set passed attributes on the model instance when created.', function() {
            var contact = new ContactManager.Models.Contact({
                name:"sam",
                tel:"849-219-6965",
                email:"sr@gmail.com",
                avatar:"6.jpg"
            });
            expect(contact.get('name')).toBe('sam');
            expect(contact.get('tel')).toBe('849-219-6965');
            expect(contact.get('email')).toBe('sr@gmail.com');
            expect(contact.get('avatar')).toBe('6.jpg');
        });
       
    });
    it('initialize function tobe instantiated ',function(){
        expect(this.contact.initialize).toBeDefined();
    })
    it("will set the image when modal instantiated is called", function() {
        this.contact.initialize();
        this.contact.set('avatar','6.jpg');
        expect(this.contact.get('avatar')).toBeDefined();
        expect(this.contact.get('avatar')).toBe('6.jpg');
      });
  
});
describe("Tests for a app.js", function() {
    
       it('ContactManager should be defined', function() {
        
           expect(window.ContactManager).toBeDefined();
         
       });
       describe("Tests for a custom start methods", function() {
        
           it('start method should be defined', function() {
            
               expect(window.ContactManager.start).toBeDefined();
             
           });
           
         });
    
     });