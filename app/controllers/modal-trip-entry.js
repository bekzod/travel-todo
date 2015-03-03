import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    close: function(){
      if( !this.get('isSaving') ){
        var model = this.get('model');
            model.deleteRecord();
            model.rollback();
        this.send('closeModal');
      }
    },
    save: function(){
      this.set('isSaving', true)
      NProgress.start();
      this.get('model')
        .save()
        .finally(function(){
          NProgress.done();
          this.send('closeModal');
          this.set('isSaving', false);
        }.bind(this));
    },
    incrementDays: function(){
      var endDate = this.get('model.endDate');
      endDate = moment( endDate ).add(1, 'day').toDate();
      this.set('model.endDate', endDate);
    },
    decrementDays: function(){
      var endDate = this.get('model.endDate');
      endDate = moment( endDate ).subtract(1, 'day').toDate();
      this.set('model.endDate', endDate);
    }
  },
  minDate: moment().toDate(),
  isSaving: false,
  isFilled: Em.computed.and('model.startDate','model.endDate','model.destination'),

  disableSaveBtn: function(){
    return !this.get('isFilled') && !this.get('isSaving');
  }.property('isFilled','isSaving'),

  disableDecrementBtn: function(){
    var start = moment( this.get('model.startDate') ).startOf('day');
    var end = moment( this.get('model.endDate') ).startOf('day');
    return end <= start;
  }.property('model.endDate','model.startDate')

});
