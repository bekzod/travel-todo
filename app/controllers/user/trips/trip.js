import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['modal-trip-entry'],
  actions:{
    close: function(){
      this.transitionToRoute('user.trips');
    },
    delete: function(){
      var model = this.get('model');
      NProgress.start()
      model.destroyRecord().finally(NProgress.done);
      this.transitionToRoute('user.trips');
    },
    edit: function(){
      var model = this.get('model');
      var controller = this.get('controllers.modal-trip-entry');
      controller.set('model',model);
      this.send('openModal', 'modal-trip-entry',controller);
    },
    print: function(){
      this.set('isPrinting',true);
      Em.run.next(this,function(){
        window.print();
        Em.run(this,function(){
          this.set('isPrinting',false);
        });
      });
    }
  },

  isPrinting: false,

  durationFormated: function(){
    var dur = this.get('model.duration');
    if( dur === 0 ){
      return 'less than a day';
    } else if( dur === 1){
      return 'day';
    } else {
      return dur + ' days';
    }
  }.property('model.duration')

});

