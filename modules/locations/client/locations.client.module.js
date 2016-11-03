(function (app) {
  'use strict';

  app.registerModule('locations', ['core', 'ngMap', 'dbaq.google.directions']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('locations.services');
  app.registerModule('locations.routes', ['ui.router', 'core.routes', 'locations.services']);
}(ApplicationConfiguration));
