import Ember from 'ember';

export function dateDuration(end, start, format) {
  var duration =  moment.duration( end - start );
  if( format === 'days' ){
    return Math.floor( duration.asDays() );
  } else if( format === 'hours' ){
    return Math.floor( duration.asHours() );
  }
}

export default Ember.Handlebars.makeBoundHelper(dateDuration);
