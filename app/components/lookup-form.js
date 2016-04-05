import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    stateLookup() {
      var params = {
        state: this.get('state')
      };
      this.sendAction('stateLookup', params);
    }
  }
});
