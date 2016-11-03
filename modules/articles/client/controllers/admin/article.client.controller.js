(function () {
  'use strict';

  angular
    .module('articles.admin')
    .controller('ArticlesAdminController', ArticlesAdminController);

  ArticlesAdminController.$inject = ['$scope', '$state', '$window', '$timeout', '$http', 'articleResolve', 'Authentication', 'Notification', 'Upload'];

  function ArticlesAdminController($scope, $state, $window, $timeout, $http, article, Authentication, Notification, Upload) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Article
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.article.$remove(function() {
          $state.go('admin.articles.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Article deleted successfully!' });
        });
      }
    }

    // Save Article
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.articleForm');
        return false;
      }

      // Create a new article, or update the current instance
      vm.article.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.articles.list'); // should we send the User to the list or the updated Article's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Article saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Article save error!' });
      }
    }

    vm.localizarUsuario = function() {
      if (window.navigator && window.navigator.geolocation) {
        var geolocation = window.navigator.geolocation;
        geolocation.getCurrentPosition(sucesso, erro);
      } else {
        alert('Geolocalização não suportada em seu navegador.');
      }
      function sucesso(posicao) {
        console.log(posicao);
        vm.article.lat = posicao.coords.latitude;
        vm.article.lon = posicao.coords.longitude;
      }
      function erro(error) {
        console.log(error);
      }
    };

    vm.updateLocation = function(event) {
      vm.article.lat = event.latLng.lat();
      vm.article.lon = event.latLng.lng();
    };

  }
}());
