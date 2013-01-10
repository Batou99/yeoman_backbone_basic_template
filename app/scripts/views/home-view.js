wineForecastingFrontend.Views.homeView = Backbone.View.extend({

  //template: home
  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change",this.render);
    console.log('in the home view');
  },

  template: new EJS({url: 'scripts/templates/home.ejs'}),

  render: function() {
    this.$el.html(this.template.render());
    return this;
  },

});
