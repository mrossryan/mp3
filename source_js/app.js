var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.
    when('/list', {
      templateUrl:'partials/list.html',
      controller: 'ListController'
    })
    .when('/gallery', {
      templateUrl: 'partials/gallery.html',
      controller: 'GalleryController'
    })
    .when('/details/:rank', {
      templateUrl: 'partials/details.html',
      controller: 'DetailsController'
    })
    .otherwise({
      redirectTo:'/list'
    });

});
