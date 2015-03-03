import Ember from 'ember';
import ajax from 'ic-ajax';

var SESSION_COOKIE_NAME = 'session';
var USER_API_URL = '/__/proxy/heroku/api/user';

export default Ember.ObjectProxy.extend({
  login: function(username, password){
    var data = {
      username: username,
      password: password
    }
    return ajax({
      url: USER_API_URL,
      type: 'PUT',
      contentType: "application/json",
      data: JSON.stringify(data)
    }).finally(function(){
      this.propertyDidChange('isLogged');
    }.bind(this));
  },

  register: function( username, password){
    var data = {
      username: username,
      password: password
    }
    return ajax({
      url: USER_API_URL,
      type: 'POST',
      contentType: "application/json",
      data: JSON.stringify(data)
    })
  },

  isLogged: function (){
    return !!Ember.$.cookie(SESSION_COOKIE_NAME);
  }.property().volatile(),

  logout: function(){
    Ember.$.removeCookie(SESSION_COOKIE_NAME, { path: '/' });
    ajax({
      url: USER_API_URL,
      type: 'DELETE'
    });
    this.propertyDidChange('isLogged');
  },

});
