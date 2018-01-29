//This example is for sending notification emails to customers when they make purchase

var Order = function(params) {
    this.params = params;
  };
  
  Order.prototype = {
    save: function() {
      // save order 
      console.log("Order saved");
      this.sendEmail();
    },
  
    sendEmail: function() {//sending email 
      var mailer = new Mailer();
      mailer.sendPurchaseEmail(this.params);
    }
  };
  
  var Mailer = function() {};
  
  Mailer.prototype = {
    sendPurchaseEmail: function(params) {
      console.log("Email sent to " + params.userEmail);
    }
  };

  //Here order and mailer are tightly coupled 
  var order = new Order({ userEmail: 'john@gmail.com'  })
  order.save();  


//   when two components are coupled when a change
//     to one requires a change in the other one, and that’s the case. If we want to change 
//     the name of the sendPurchaseEmail method or their params, we’ll have to change Order implementation 
//     as well. 
// we can improve this code using the Publish/Subscribe pattern.
var EventBus = {
    topics: {},
  
    subscribe: function(topic, listener) {
      // create the topic if not created
      if(!this.topics[topic]) this.topics[topic] = [];
  
      // add the listener
      this.topics[topic].push(listener);
    },
  
    publish: function(topic, data) {
      // return if the topic doesn't exist, or there are no listeners
      if(!this.topics[topic] || this.topics[topic].length < 1) return;
  
      // send the event to all listeners
      this.topics[topic].forEach(function(listener) {
        listener(data || {});
      });
    }
  };
  // Here we can use  EventBus object to send messages between objects like  
  EventBus.subscribe('foo', alert);
  EventBus.publish('foo', 'Hello World!');



// use the EventBus to decouple Order and Mailer
var Mailer = function() {
    EventBus.subscribe('order/new', this.sendPurchaseEmail);
  };
  
  Mailer.prototype = {
    sendPurchaseEmail: function(userEmail) {
      console.log("Sent email to " + userEmail);
    }
  };
  
  var Order = function(params) {
    this.params = params;
  };
  
  Order.prototype = {
    saveOrder: function() {
      EventBus.publish('order/new', this.params.userEmail);
    }
  };

  var mailer = new Mailer();
  var order = new Order({userEmail: 'john@gmail.com'});
  order.saveOrder();
  