(function () {
  'use strict';

  angular
    .module('locations')
    .controller('RouteLocationController', RouteLocationController);

  RouteLocationController.$inject = ['$scope', '$state', '$window', 'articleResolve', 'Authentication', 'LocationsService', 'googleDirections'];

  function RouteLocationController($scope, $state, $window, article, Authentication, LocationsService, googleDirections) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;
    vm.form = {};
    vm.origem = {};
    vm.origem = '[' + vm.article.lat + ',' + vm.article.lon + ']';

    vm.loginUser = Authentication.user;

  }
}());
