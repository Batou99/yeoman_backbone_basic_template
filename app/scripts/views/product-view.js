wineForecastingFrontend.Views.productView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change",this.render);
  },

  template: new EJS({url: 'scripts/templates/product.ejs'}),

  render: function() {
    this.$el.html(this.template.render(this.model.toJSON()));
    return this;
  },

});
