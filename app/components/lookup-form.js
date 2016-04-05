import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    stateLookup() {
      debugger;
      var params = {
        routing: this.get('routing'),
        // state: this.get('state')
      };
      this.sendAction('stateLookup', params);
    }
  }
});
