app.controller('ListController', ['$scope', '$http', function($scope, $http) {

  $http.get('../data/imdb250.json')
      .success(function(response){
        $scope.movies = response;
      })
      .error(function(err){
        console.log(err)
      });

      $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
      };

      $scope.reverse = true;

}]);

app.controller('GalleryController', ['$scope', '$http', function($scope, $http) {

  $scope.filter = function(genre){$scope.filterVariable = genre;}
  $http.get('../data/imdb250.json')
      .success(function(response){
        $scope.movies = response;
      })
      .error(function(err){
        console.log(err)
      });

}]);

app.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $http.get('../data/imdb250.json')
      .success(function(response){
        $scope.movie = response[$routeParams.rank - 1]
      })
      .error(function(err){
        console.log(err)
      });

}]);


// app.controller('GalleryController'), ['$scope', function($scope) {
//
// }]);
