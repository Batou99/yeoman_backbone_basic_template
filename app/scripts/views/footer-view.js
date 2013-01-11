wineForecastingFrontend.Views.footerView = Backbone.View.extend({

  tagName: 'footer',
  className: 'main',

  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change",this.render);
  },

  template: new EJS({url: 'scripts/templates/footer.ejs'}),

  render: function() {
    this.$el.html(this.template.render(this.model));
    return this;
  },

});
