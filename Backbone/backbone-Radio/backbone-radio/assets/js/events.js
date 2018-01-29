// channel.on('event', callback, [context]) - when event fires, call callback
// channel.once('event', callback, [context]) - same as on, but triggered only once
// channel.off('event') - stop listening to event
// channel.trigger('event', ..args) - fires event and passes args into the resulting callback


const ChannelHandler = Mn.Object.extend({
    initialize() {
      const channel = Backbone.Radio.channel('myChannel1');
      this.listenTo(channel, 'log', this.logMsg);
    },
  
    logMsg(msg) {
      console.log(msg);
    }
  });
  
  const channelHandler = new ChannelHandler();
  const myChannel1 = Backbone.Radio.channel('myChannel1');
  myChannel1.trigger('log', 'Log message');