wineForecastingFrontend.Routers.ApplicationRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  start: function() {
    Backbone.history.start({});
  },

  initialize: function() {
    console.log('in init action'); 
    var dummy = new wineForecastingFrontend.Models.ApplicationModel();
    var headerView = new wineForecastingFrontend.Views.headerView({model: dummy});
    $('#main').prepend(headerView.render().el);
    var footerView = new wineForecastingFrontend.Views.footerView({model: dummy});
    $('#main').append(footerView.render().el);
    this.start();
  },

  home: function() {
    console.log('in home action'); 
    var dummy = new wineForecastingFrontend.Models.ApplicationModel();
    var homeView = new wineForecastingFrontend.Views.homeView({model: dummy });
    $('header').after(homeView.render().el);
  }

});
