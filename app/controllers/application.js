import Ember from 'ember';

export default Ember.Controller.extend({
  isLogged: Em.computed.alias('session.isLogged')
});
