import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var federalUrl = 'http://congress.api.sunlightfoundation.com/legislators?state='+ params.state + '&apikey=' + key;
      return Ember.$.getJSON(federalUrl).then(function(responseJSON) {
        return responseJSON.results;
      });
    }
});
