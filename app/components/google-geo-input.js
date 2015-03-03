import Ember from 'ember';

export default Ember.TextField.extend({

  initGoogleAutoComplete: function(){
    var searchBox = new google.maps.places.Autocomplete( (this.$()[0]) );
    this.set('searchBox',searchBox);
    google.maps.event.addListener(
      searchBox,
      'place_changed',
      this.onPlaceChoose.bind(this)
    );
  }.on('didInsertElement'),

  onPlaceChoose: function(){
    this.set('value',this.$().val());
  },

  destoyGoogleAutoComplete: function(){
    var input = this.$()[0];
    google.maps.event.clearListeners(input, "focus");
    google.maps.event.clearListeners(input, "blur");
    google.maps.event.clearListeners(input, "keydown");
    this.set('searchBox',null);
  }.on('willDestroy')

});
