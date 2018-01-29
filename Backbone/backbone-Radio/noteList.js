import {template} from 'underscore';
import {CollectionView, View} from 'backbone.marionette';
import Radio from 'backbone.radio';

const NoteItemView = View.extend({
  template: template('<%- text %>')
});

export const NoteListView = CollectionView.extend({
  childView: NoteItemView,
  
  // Setup the radio listener
  initialize() {
    const channel = Radio.channel('notes');
    this.listenTo(channel, 'created', this.addNote);
  },
  
  // Add a given note to the collection
  addNote(model) {
    this.collection.add(model);
  }
});