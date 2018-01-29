
// In the example code we have four participants that are joining in a chat session by registering with a Chatroom 
// (the Mediator). Each participant is represented by a Participant object.
//  Participants send messages to each other and the Chatroom handles the routing.

var Participant = function(name) {
    this.name = name;
    this.chatroom = null;//having reference to chatroom
  };
  
  Participant.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
      console.log(from.name + " to " + this.name + ": " + message);
    }
  };
  
  var Chatroom = function() {
    var participants = {};//maintaining list of participants
  
    return {//registering all the participants with name 
      register: function(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
      },
  
      send: function(message, from, to) {
        if (to) {
          // single message
          to.receive(message, from); //here if you mention single user ...that single person receives message
        } else {
          // broadcast message
          for (key in participants) {//here all participants receives messages from chatroom
            if (participants[key] !== from) {
              participants[key].receive(message, from);
            }
          }
        }
      }
    };
  };
  
  var beau = new Participant("Beau");
  var quincy = new Participant("Quincy");
  var rafael = new Participant("Rafael");
  var berkeley = new Participant("Berkeley");
  var evaristo = new Participant("Evaristo");
  
  var chatroom = new Chatroom();//registering participants
  chatroom.register(beau);
  chatroom.register(quincy);
  chatroom.register(rafael);
  chatroom.register(berkeley);
  chatroom.register(evaristo);
  
  quincy.send("How's it going?");//sending to all by quincy
  beau.send("The YouTube channel is up to 1 million subscribers!", quincy); //sending to  Quincy from beau
  rafael.send("The FCC wiki is more popular than Wikipedia!", quincy);//sending to  Quincy
  evaristo.send("98% of our graduates got their dream job!", quincy);//sending to  Quincy
  berkeley.send("The government forked our repo and is now using it to create world peace!", quincy);//sending to  Quincy
  
  