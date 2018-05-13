import Component from '@ember/component';

export default Component.extend({
  number: 0,
  results: [],

  sum: Ember.computed.sum('results'),

  actions: {
    input: function(number){
            this.get('results').pushObject(Number(number));
            this.set('number', '');
    }
  }
});
