import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    stateLookup(params) {
      console.log(params);
      this.transitionTo('results', params.routing, params.state);
    }
  }
});
