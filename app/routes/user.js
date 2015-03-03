import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(){
    return ajax('/__/proxy/heroku/api/user');
  },
  renderTemplate: function (controller, model){
    this._super.apply(this, arguments);
    this.render('header-user', {
      outlet: 'header',
      controller: this.controller
    });
  },
  redirect: function(model,transition) {
    if( transition.targetName === 'user.index' ){
      this.transitionTo('user.trips');
    }
  }
});
