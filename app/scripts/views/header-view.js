wineForecastingFrontend.Views.headerView = Backbone.View.extend({
  tagName: 'header',
  className: 'main clearfix',

  events: {
    'click .nav-dashboard': 'toggleActive' 
  },

  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change",this.render);
  },

  template: new EJS({url: 'scripts/templates/header.ejs'}),

  render: function() {
    this.$el.html(this.template.render(this.model));
    return this;
  },

  toggleActive: function(event) {
    $('.nav-dashboard').removeClass('active');
    $(event.target).addClass('active');
  }

});
