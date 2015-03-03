import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['modal-notification'],
  actions: {
    login: function(){
      var username = this.get('model.username');
      var password = this.get('model.password');

      this.session.login(username,password)
        .then(function(){
          this.transitionToRoute('user');
        }.bind(this))
        .catch(function(err){
          var controller = this.get('controllers.modal-notification');
          if(err.jqXHR && err.jqXHR.status === 401 || err.jqXHR.status === 400) {
            this.send('openModal','login-fail',controller);
          } else {
            this.send('openModal','error-modal',controller);
          }
        }.bind(this))
    }
  }
});
