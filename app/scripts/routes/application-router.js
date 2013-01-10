wineForecastingFrontend.Routers.ApplicationRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  start: function() {
    Backbone.history.start({});
  },

  initialize: function() {
    console.log('in init action'); 
    this.start();
  },

  home: function() {
    console.log('in home action'); 
  }

});
