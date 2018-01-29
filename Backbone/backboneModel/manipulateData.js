var UserModel = Backbone.Model.extend({
    
      defaults: {//defining default values
        firstName: '',
        lastName: '',
        birthDate: '',
        formatedDate: '',
        fullName: ''
      },
    
      initialize: function () {//initializing functions
        console.log("UserModel has been initialized");
       
        this.setFullName();
        this.setDate();
        // some event handlers to listen to model change
        this.on('change',  function() {
            if(this.hasChanged('firstName')){
                console.log("FirstName has been changed");
            }
            if(this.hasChanged('lastname')){
                console.log("LastName has been changed");
            }
        });
        
        //Change in any specific attribute
        this.on('change:lastname', function () {
            console.log('Message from specific listener: LastName has been changed');
        });

      },
      ///////// when   backbone model is created, its constructor gets called.
    //    The constructor will call the initialize function. It is also possible to provide out own
    //  constructor and provide the custom behavior.
      constructor: function (attributes, options) {
        console.log('UserModels\'s constructor had been called');//it overrides initialize funtions console.log() output
        Backbone.Model.apply(this, arguments);// used to get  remain both initialize function and constructor functions
    },
    
      setFullName: function () { //seeting full name 
        this.set('fullName', this.get('firstName') + ' ' + this.get('lastName'));
      },
    
      setDate: function () {//setting date in new format
        this.set('formatedDate', this.get('birthDate').split('-').reverse().join('/'));
      }
    });
    
    var user = new UserModel({
      firstName: 'Bruce',
      lastName: 'Wayne',
      birthDate: '1980-02-19'
    });
    
    user.get('fullname');
    // console.log(user.get('fullname')); // "Bruce Wayne"
    user.get('formatedDate'); // "19/02/1980"