import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  startDate: attr('date', { defaultValue: moment().startOf('day').toDate() }),
  endDate: attr('date', { defaultValue: moment().startOf('day').toDate() }),
  destination: attr('string'),
  comment: attr('string'),

  daysLeft: function(){
    var today = moment().startOf('day');
    var start = this.get('startDate');
    return Math.floor( moment.duration( start - today ).asDays() );
  }.property('startDate'),

  duration: function(){
    var start = this.get('startDate');
    var end = this.get('endDate');
    return Math.floor( moment.duration( end - start ).asDays() );
  }.property('startDate','endDate')

});
