import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    stateLookup(params) {
      this.transitionTo('results', params.routing, params.state);
    }
  }
});
