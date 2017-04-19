
var myApp = angular.module('myApp', []);

function MyCtrl($scope) {
  $scope.name = 'Superhero';

  $scope.reviews = [];
  
  $scope.review = {};
  
  $scope.addReview = function () {
    
    $scope.reviews.push({
      name: $scope.review.username,
      email: $scope.review.email,
      star: $scope.review.star,
      message: $scope.review.message
    });
    
    $scope.review = {};    
  };
}