import {template} from 'underscore';
import {View} from 'backbone.marionette';
import Radio from 'backbone.radio';


export const NoteView = View.extend({
  template: template('<textarea class="note-text"><%- text %></textarea><button class="btn-save">Save</button>'),
  
  modelEvents: {
    sync: 'sendRadioEvent'
  },
  
  ui: {
    textBox: '.note-text',
    saveButton: '.btn-save'
  },
  
  events: {
    'click @ui.saveButton': 'saveNote'//click event
  },
  
  // Save the note from the text box
  saveNote() {
    this.model.save({
      text: this.getUI('textBox').val()//getting  text box value
    });
  },
  
  // Send the Radio event to get picked up from notelist.js
  sendRadioEvent() {
    const channel = Radio.channel('notes');
    channel.trigger('created', this.model);  // Exactly like regular events triggering
  }
});