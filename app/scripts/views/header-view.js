wineForecastingFrontend.Views.headerView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change",this.render);
    console.log('in the header view');
  },

  template: new EJS({url: 'scripts/templates/header.ejs'}),

  render: function() {
    this.$el.html(this.template.render(this.model));
    return this;
  },

});
