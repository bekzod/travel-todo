import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: '__/proxy/heroku/api',
  pathForType: function(type) {
    return type;
  },
  extractDeleteRecord: function(store, type, payload) {
    return null;
  }
});
