import Ember from 'ember';

/*globals moment,Pikaday */

export default Ember.TextField.extend({
  classNames:['date-picker'],
  initPikADay: function(){
    var selectedDate = this.get('selectedDate');
    var picker = new Pikaday({
         field: this.$()[0],
         format: 'D MMM YYYY',
         minDate: this.get('minDate'),
         maxDate: this.get('maxDate'),
         defaultDate: selectedDate,
         setDefaultDate: selectedDate,
         onSelect: function(date) {
            this.set('selectedDate',date);
         }.bind(this)
     });
    this.set('picker',picker);
  }.on('didInsertElement'),

  syncSelectedDate: function(){
    var picker = this.get('picker');
    var date = this.get('selectedDate');
    picker.setDate(date, true);
  }.observes('selectedDate'),

  onEmpty: function(){
    var val = this.get('value');
    var picker = this.get('picker');
    if(!val){
      this.set('selectedDate',null);
      picker.gotoToday()
    }
  }.observes('value'),

  syncMinDate: function(){
    var picker = this.get('picker');
    var date = this.get('selectedDate');
    var minDate = this.get('minDate');
    if( date && (minDate > date) ) {
      picker.setDate(minDate);
    }
    picker.setMinDate(minDate);
    if(minDate){
      picker.gotoMonth(minDate.getMonth());
    }
  }.observes('minDate'),

  destroyPikADay: function(){
    this.get('picker').destroy();
  }.on('willDestroyElement')

});
