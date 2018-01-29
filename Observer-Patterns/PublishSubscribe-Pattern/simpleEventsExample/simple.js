var events = (function(){
    var topics = {};
    var hOP = topics.hasOwnProperty;
  
    return {
      subscribe: function(topic, listener) {
        // Create the topic's object if not created
        if(!hOP.call(topics, topic)) topics[topic] = [];
  
        // Adding  the listener to queue
        var index = topics[topic].push(listener) -1;
  
        //  removal of topic
        return {
          remove: function() {
            delete topics[topic][index];
          }
        };
      },
      publish: function(topic, info) {
        // If the topic doesn't exist, or there's no listeners in queue, get out of loop
        if(!hOP.call(topics, topic)) return;
  
        // Cycle through topics queue, fire!
        topics[topic].forEach(function(item) {
                item(info != undefined ? info : {});
        });
      }
    };
  })();
  // Publishing to a topic:
  events.publish('/page/load', {
    url: '/some/url/path' // any argument
  });

  //subscribing to said topic in order to be notified of events:
  var subscription = events.subscribe('/page/load', function(obj) {
    // Do something now that the event has occurred
  });
  
  // ...sometime later where I no longer want subscription...
  subscription.remove()