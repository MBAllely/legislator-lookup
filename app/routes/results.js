import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/' + params.routing + '?state=' + params.state + '&apikey=73e500fb4e1844548aa274ab5b345fcd';
    console.log(params);
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
  }
});
