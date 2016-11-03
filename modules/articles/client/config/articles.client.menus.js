(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Articles',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'List Articles',
      state: 'articles.list',
      roles: ['*']
    });

    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'New Article',
      state: 'admin.articles.create',
      roles: ['admin', 'user']
    });

    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'List Article User',
      state: 'admin.articles.list',
      roles: ['admin', 'user']
    });

  }
}());
