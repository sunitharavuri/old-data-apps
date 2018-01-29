describe('ContactManager.Collections.Contacts', function() {
    it(' collection should be defined', function() {
        expect(ContactManager.Collections.Contacts).toBeDefined();
    });
    it(' collection can be instantiated', function() {
        var contactsCollection = new ContactManager.Collections.Contacts();
        expect(contactsCollection).not.toBeNull();
    });
    beforeEach(function() {
        this.contactsCollection = new ContactManager.Collections.Contacts();
    });
    it('should add Model instances as objects one at a time, or as arrays of models', function() {
      

        expect( this.contactsCollection.length).toBe(0);

        this.contactsCollection.add({ 
        name:"sam",
        tel:"849-219-6965",
        email:"sr@gmail.com",
        avatar:"6.jpg" });

         expect(this.contactsCollection.length).toBe(1);

        // How would you add multiple models to the collection with a single method call?
        this.contactsCollection.add
        ({ 
            name:"sam",
            tel:"849-219-6965",
            email:"sr@gmail.com",
            avatar:"6.jpg"
        },
        {
            name:"sam1",
            tel:"567-786-8700",
            email:"gm@gmail.com",
            avatar:"7.jpg"
        }
    );

        expect(this.contactsCollection.length).toBe(2);
    });
    // it('Fires custom named events when the contents of the collection change.', function() {
    //     this.contactsCollection = new ContactManager.Collections.Contacts();
    
    //     var addModelCallback = jasmine.createSpy('newContact');
    //     this.contactsCollection.on('newContact', addModelCallback);
    
    //     // How would you get both expectations to pass with a single method call?
    
    //     expect( this.contactsCollection.length).toEqual(0);
    //     expect(addModelCallback).toHaveBeenCalled();
    // });
});