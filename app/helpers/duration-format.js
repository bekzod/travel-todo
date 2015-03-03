import Ember from 'ember';

export function durationFormat(days) {
    if( days == 0 ){
      return 'Today';
    } else if( days == 1 ){
      return 'Tomorrow';
    } else if( days == -1 ){
      return 'Yesterday';
    } else if( days > 1) {
      return 'in ' + days + ' days';
    } else if( days < 0) {
      return (-days) + ' days ago';
    }
}

export default Ember.Handlebars.makeBoundHelper(durationFormat);
