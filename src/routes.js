var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homeView'
  },

  homeView: function() {
    new App.views.HomeView();
  }
});
