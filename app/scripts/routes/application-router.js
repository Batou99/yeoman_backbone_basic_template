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
    var dummy = new wineForecastingFrontend.Models.ApplicationModel();
    var homeView = new wineForecastingFrontend.Views.homeView({model: dummy });
    $('#main-body').html(homeView.render().el);
  }

});
