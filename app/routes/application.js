import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(error, transtion){
      if (error && error.jqXHR && error.jqXHR.status === 401 || error.status === 401) {
        transtion.abort();
        this.session.logout();
        this.store.unloadAll('trip');
        this.transitionTo('login');
      } else {
        var controller = this.controllerFor('modal-notification');
        this.send('openModal','error-modal');
      }
    },

    loading: function(){
      NProgress.start();
    },

    didTransition: function(){
      NProgress.done();
    },

    openModal: function(modalName, controller) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        controller: controller
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    logout: function(){
      this.session.logout();
      this.store.unloadAll('trip');
      this.controller.transitionToRoute('login');
    }
  },

  redirect: function(model,transtion){
    if( this.session.get('isLogged') ){
      if( ['index','login','register'].indexOf(transtion.targetName) > -1 ){
        this.transitionTo('user');
      }
    } else {
      if( ['login','register'].indexOf(transtion.targetName) === -1 ){
        this.transitionTo('login');
      }
    }
  },

});
