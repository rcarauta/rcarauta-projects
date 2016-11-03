(function () {
  'use strict';

  angular
    .module('locations.services')
    .factory('LocationsService', LocationsService);

  LocationsService.$inject = ['$resource', '$log'];

  function LocationsService($resource, $log) {
    var Location = $resource('/api/articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });


    return Location;

  }
}());
