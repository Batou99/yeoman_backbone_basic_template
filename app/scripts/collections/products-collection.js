wineForecastingFrontend.Collections.ProductsCollection = Backbone.Collection.extend({

  initialize: function(options) {
    console.log('opts',options);
    this.supplier_id = options.supplier_id;
  },

  url: function() {
    //FIXME: This should point to the grape service
    //return '/products/' + this.supplier_id
    return 'scripts/fixtures/products_' + this.supplier_id + '.json';
  },
  model: wineForecastingFrontend.Models.ProductModel
});
