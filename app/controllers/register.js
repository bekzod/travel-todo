import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['modal-notification'],
  actions: {
    register: function(){
      var username = this.get('username');
      var password = this.get('password');

      this.session.register(username,password)
        .then(function(){
          var controller = this.get('controllers.modal-notification');
          this.send('openModal','registration-success',controller);
          this.transitionToRoute('login');
        }.bind(this))
        .catch(function(err){
          var controller = this.get('controllers.modal-notification');
          if(err.jqXHR && err.jqXHR.status === 409) {
            this.send('openModal','user-exist-modal',controller);
          } else {
            this.send('openModal','error-modal',controller);
          }
        }.bind(this))
    }
  },

  isValidUsername: true,
  isValidPassword: true,
  isInValid: false,

  validate: function(){
    var username = this.get('username') || '';
    var password = this.get('password') || '';
    var isUserValid = username.length > 5
    var isPassValid = password.length > 5

    this.set('isValidUsername', isUserValid);
    this.set('isValidPassword', isPassValid);
    this.set('isInValid', !(isUserValid && isPassValid));
  }.observes('username','password')

});
