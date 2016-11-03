(function () {
  'use strict';

  angular
    .module('locations')
    .controller('LocationsListController', LocationsListController);

  LocationsListController.$inject = ['$scope', 'LocationsService', 'Authentication'];

  function LocationsListController($scope, LocationsService, Authentication) {
    var vm = this;

    vm.locations = LocationsService.query();

    vm.loginUser = Authentication.user;

  }
}());
