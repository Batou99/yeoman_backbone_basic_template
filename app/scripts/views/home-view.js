wineForecastingFrontend.Views.homeView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change",this.render);
  },

  template: new EJS({url: 'scripts/templates/home.ejs'}),

  render: function() {
    this.$el.html(this.template.render(this.model));
    return this;
  },

});
