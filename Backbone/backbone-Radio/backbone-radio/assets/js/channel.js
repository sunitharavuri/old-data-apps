//to retrive channel,---  Radio.channel(channelName):

//one module
const myChannel = Backbone.Radio.channel('basic');//defining channel in one module 

myChannel.on('some:event', function() {
  console.log('some:event was triggered')
});

//another module
const someChannel = Backbone.Radio.channel('basic');//using defined channel in another model 

someChannel.trigger('some:event');
