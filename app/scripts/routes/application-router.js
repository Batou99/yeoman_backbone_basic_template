wineForecastingFrontend.Routers.ApplicationRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'allProducts/:supplier_id':'all_products'
  },

  start: function() {
    Backbone.history.start({});
  },

  initialize: function() {
    console.log('in init action'); 
    var dummy = new wineForecastingFrontend.Models.ProductModel();
    window.headerView = new wineForecastingFrontend.Views.headerView({model: dummy});
    $('#main-header').html(window.headerView.render().el);
    window.footerView = new wineForecastingFrontend.Views.footerView({model: dummy});
    $('#main-footer').html(window.footerView.render().el);
    this.start();
  },

  home: function() {
    console.log('in home action'); 
    var dummy = new wineForecastingFrontend.Models.ProductModel();
    var homeView = new wineForecastingFrontend.Views.homeView({model: dummy });
    $('#main-body').html(homeView.render().el);
  },

  all_products: function(supplier_id) {
    var products = new wineForecastingFrontend.Collections.ProductsCollection({ supplier_id: supplier_id})
    var allProductsView = new wineForecastingFrontend.Views.allProductsView({ collection: products });
    $('#main-body').html(allProductsView.render().el);
  }

});
