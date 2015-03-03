import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function(model,transition){
    transition.abort();
    this.transitionTo('index');
  }
});
