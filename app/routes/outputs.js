import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var stateUrl = 'http://openstates.org/api/v1//legislators/?state='+ params.state + '&active=true&apikey=' + key;
      return Ember.$.getJSON(stateUrl).then(function(responseJSON) {
        return responseJSON;
      });
    }
  });
