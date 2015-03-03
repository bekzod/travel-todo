import Ember from 'ember';

export function formateDate(input,format) {
  return moment(input).format(format)
}

export default Ember.Handlebars.makeBoundHelper(formateDate);
