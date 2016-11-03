(function () {
  'use strict';

  angular
    .module('locations.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('locations', {
        abstract: true,
        url: '/locations',
        template: '<ui-view/>'
      })
      .state('locations.list', {
        url: '',
        templateUrl: '/modules/locations/client/views/list-location.client.view.html',
        controller: 'LocationsListController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('locations.view', {
        url: '/:articleId/view',
        templateUrl: '/modules/locations/client/views/route-location.client.view.html',
        controller: 'RouteLocationController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        },
        resolve: {
          articleResolve: getArticle
        }
      });
  }

  getArticle.$inject = ['$stateParams', 'LocationsService'];

  function getArticle($stateParams, LocationsService) {
    return LocationsService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }

}());
