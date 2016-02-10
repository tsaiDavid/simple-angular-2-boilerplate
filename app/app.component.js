(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Simple Angular 2 Boilerplate</h1>'
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));
