
window.wineForecastingFrontend = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function(){
  wineForecastingFrontend.init();
  var router = new wineForecastingFrontend.Routers.ApplicationRouter();
});
