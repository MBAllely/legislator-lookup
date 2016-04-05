import Ember from 'ember';

export default Ember.Component.extend({
  lookUpId = 'legislator.biomed'
  actions: {
    stateLookup() {
      var params = {
        state: this.get('state')
      };
      this.sendAction('stateLookup', params);
    }
  }
});
