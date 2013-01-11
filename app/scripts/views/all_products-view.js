wineForecastingFrontend.Views.allProductsView = Backbone.View.extend({

  tagName: 'table',

  className: 'products',

  initialize: function() {
    _.bindAll(this,'render');
    this.collection.bind('reset',this.render);
    this.collection.fetch();
  },

  //template: new EJS({url: 'scripts/templates/all_products.ejs'}),

  render: function() {
    //this.$el.html(this.template.render());
    this.collection.each(function(product) {
      var view = new wineForecastingFrontend.Views.productView({ model: product });
      this.$el.append(view.render().el);
    },this);
    return this;
  },

});
