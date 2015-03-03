import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['modal-trip-entry'],
  queryParams: {
    sortBy: 'sort',
    sortAscending: 'asc',
    startDate: 'startDate',
    endDate: 'endDate',
    filter: 'filter'
  },

  actions: {
    showAddTripModal: function() {
      var model = this.store.createRecord('trip');
      var controller = this.get('controllers.modal-trip-entry');
      controller.set('model', model);
      this.send('openModal', 'modal-trip-entry',controller);
    },

    toggleAscneding: function() {
      this.toggleProperty('sortAscending');
    },

    print: function(){
      this.set('isPrinting',true);
      Em.run.next(this,function(){
        window.print();
        Em.run(this,function(){
          this.set('isPrinting',false);
        });
      });
    },

    clear: function(){
      this.set('startDate', null);
      this.set('endDate', null);
    }
  },

  isPrinting: false,
  startDate: null,
  endDate: null,
  filter: 'startDate',

  sortProperties: ['startDate'],
  sortBy: 'startDate',

  isClearBtnDisabled: function(){
    return !this.get('startDate') && !this.get('endDate');
  }.property('startDate','endDate'),

  correctEndDate: function(){
    var startDate = this.get('startDate');
    var endDate = this.get('endDate');
    if(endDate && (endDate <= startDate)){
      this.set('endDate',startDate);
    }
  }.observes('startDate'),

  sortPropertyChange: function(){
    this.set('sortProperties',[this.get('sortBy')])
  }.observes('sortBy')

});

