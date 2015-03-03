import Ember from 'ember';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Route.extend({
  queryParams: {
    startDate: {
      refreshModel: true
    },
    endDate: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    }
  },

  model: function(params){
    var args = ['trip'];
    if(params.startDate || params.endDate){
      args.push(params);
    }
    return this.store.find.apply(this.store,args);
  },

  deserializeQueryParam: function(value, urlKey, defaultValueType) {
    if( ['startDate','endDate'].indexOf(urlKey) > -1 ){
      return moment(value,DATE_FORMAT).startOf('day').toDate();
    } else {
      return this._super.apply(this,arguments);
    }
  },

  serializeQueryParam: function(value, urlKey, defaultValueType) {
    if( ['startDate','endDate'].indexOf(urlKey) > -1 ){
      return moment(value).format(DATE_FORMAT);
    } else {
      return this._super.apply(this,arguments);
    }
  }

});
