// describe("Tests for a custom Backbone View", function() {
//   var   contact, contactView;

//   beforeEach(function() {
// 		contact = new ContactManager.Models.Contact({
//       name:"sam",
//       tel:"849-219-6965",
//       email:"sr@gmail.com",
//       avatar:"6.jpg"
//     });

//   	spyOn(ContactManager.Views.Contact.prototype,'render').and.callThrough();

//     contactView = new ContactManager.Views.Contact({
//       model: contact
//     });
//   });
//   it("test for events like 'click .delete-contact' click", function() {
//   	expect(contactView.events['click .delete-contact']).toBeDefined();
//   	expect(contactView.events['click ul li']).toEqual('onClickDelete');
//   });
// });
// });
     // it("on click delete event  should be defined and set  ", function() {
      //   	expect(contactView.events['click .delete-contact']).toBeDefined();
      //   	expect(contactView.events['click .delete-contact']).toEqual('onClickDelete');
      //   });
        // it("render method to be called ", function() {
        // 	expect(contactView.render).toHaveBeenCalled();
        // });
    
  // describe("Template for listing", function() {
  //   beforeEach(function() {
  //     this.view.render();
  //   });
    
  //   // it("should have main-container element", function() {
  //   //   expect(this.view.$el.find('.main-container')).toBeDefined();
  //   // });
    
  //   // it("should have edit and delete buttons", function() {
  //   //   expect(this.view.$el.find('a.delete-contact')).toBeDefined();
  //   //   expect(this.view.$el.find('a #edit')).toBeDefined();
  //   // });
  // });

  // beforeEach(function() {
  //   var contact = new ContactManager.Models.Contact({
  //     name:"sam",
  //     tel:"849-219-6965",
  //     email:"sr@gmail.com",
  //     avatar:"6.jpg"
  // });
  // var contactView =new ContactManager.Views.Contact({ 
  //      model: contact
  // });
     
  // 	spyOn( contactView.prototype, 'render').and.callThrough();

  
  // });

  // it("on click delete event  should be defined and set  ", function() {
  // 	expect(contactView.events['click .delete-contact']).toBeDefined();
  // 	expect(contactView.events['click ul li']).toEqual('onClickDelete');
  // });
  // it("render method to be called ", function() {
  // 	expect(contactView.render).toHaveBeenCalled();
  // });
 
// describe("Contact model view", function() {
    // beforeEach(function() {
    //   this.collection = new ContactManager.Collections.Contacts ();
    //   this.model = new ContactManager.Models.Contact({
    //     name:"sam",
    //     tel:"849-219-6965",
    //     email:"sr@gmail.com",
    //     avatar:"6.jpg"
    //   });
       
    //   this.view = new ContactManager.Views.Contact({collection: this.collection, model: this.model});
    //   spyOn(ContactManager.Views.Contact.prototype, 'render').and.callThrough();
    // });
    
    // describe("Instantiation", function() {
    //   it("should create a div element", function() {
    //     expect(this.view.el.tagName).toEqual("li");
    //   });
    // });
    
    // describe("Rendering", function() {
      
    //   it("returns the view object", function() {
    //     expect(this.view.render()).toEqual(this.view);
    //   });
      
    //   it("returns the view object in view edit mode", function() {
    //     this.view.model.enterEditState();
    //     expect(this.view.render()).toEqual(this.view);
    //     this.view.model.leaveEditState();            // so view is in "show" mode now
    //   });
      
    //   describe("Template for listing", function() {
    //     beforeEach(function() {
    //       //this.view.model._isStateEdit = false;
    //       this.view.render();
    //     });
        
    //     it("should have span4 element", function() {
    //       expect(this.view.$el.find('.span4')).toBeDefined();
    //     });
        
    //     it("should have edit and delete buttons", function() {
    //       expect(this.view.$el.find('button.edit-button')).toBeDefined();
    //       expect(this.view.$el.find('button.delete-button')).toBeDefined();
    //     });
    //   })
      
    //   describe("Template for editing", function() {
    //     beforeEach(function() {
    //       this.view.render();
    //     })
        
    //     // ovo nije nastavljano jer ne znam kako dobit renderiranje edit templatea
        
    //   });
      
    // });
    
    
    // describe("Events", function() {
    //   beforeEach(function() {
    //     this.view.model._isStateEdit = false;
    //     this.view.render();
    //   });
      
    //   it("should render edit form on edit button click", function() {
    //     console.log(this.view.$el)
  
    //     console.log(this.view.model.isInEditState());
    //     var $btn = this.view.$el.find('button.edit-button');
    //     expect($btn).toBeDefined();
    //     $btn.click();
        
    //     var $input = this.view.$el.find('input');
    //     expect($input).toBeDefined();
    //     expect($input.val()).toEqual(this.view.model.get('email'));
        
    //     expect(this.view.$el.find('button.btn-primary')).toBeDefined();
    //     expect(this.view.$el.find('button.btn-primary').text()).toEqual('Update User');
        
    //     expect(this.view.$el.find('button.cancel-button')).toBeDefined();
    //     expect(this.view.$el.find('button.cancel-button').text()).toEqual('Cancel');
    //   });
      
    //   it("should render edit form and not change user on cancel", function() {
    //     var $btn = this.view.$el.find('button.edit-button');
    //     $btn.click();
        
    //     var $input = this.view.$el.find('input');
    //     $input.val('Markan');
    //     //console.log($input.val());
    //     var $cancelBtn = this.view.$el.find('.cancel-button');
    //     expect($cancelBtn).toBeDefined();
    //     expect($cancelBtn.size()).toEqual(1);
        
    //     this.renderSpy = sinon.spy();
    //     this.view.model.bind('change', this.renderSpy);
        
    //     expect(this.view.model.isInEditState()).toBeTruthy();
  
    //     $cancelBtn.click();                         // this does not change view to show status
    //     this.view.model.leaveEditState();
    //     expect(this.renderSpy).toHaveBeenCalled();   // click event went to model and model triggered change on view
    //     expect(this.renderSpy).toHaveBeenCalledTwice();
  
    //     expect(this.view.model._isStateEdit).toEqual(false);
        
    //     //expect(this.view.model.isInEditState()).toEqual(false);
        
    //     this.view.render();
    //     console.log(this.view);  // zašto se ovdje ne prikazuje promijenjeni view (da ne sadrži input formu)
  
    //     //expect(this.view.$el.find('input').size()).toEqual(0);   // THIS SPEC FAILS
    //     // SPEC ABANDONED BECAUSE CLICK ON CANCEL BUTTON DOES NOT RE-RENDER THE VIEW
  
    //   });
      
    //   it("should render edit form and change a user on update", function() {
    //     console.log(this.view.$el)
    //     var $btn = this.view.$el.find('button.edit-button');
    //     //$btn.click();
    //     expect(this.view.model.isInEditState()).toBeTruthy();
        
    //   })
    // });
    
    
  //});