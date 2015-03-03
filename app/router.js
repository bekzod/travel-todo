import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route( 'user', { path:'/user' }, function(){
    this.route( 'trips', { path:'/trips' }, function(){
      this.route( 'trip', { path:'/:id' });
    });
  });
  this.route("login");
  this.route("missing", {path:'/*path'});
  this.route("register");
});

export default Router;
