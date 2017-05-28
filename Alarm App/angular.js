var app = angular.module("myApp",[]);

app.controller('alarm',function($scope,$interval,$http){

	$scope.time = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.time = new Date().toLocaleTimeString();
  }, 1000);


$scope.submit =function(){

 $http.post("index.php",{ 'Date' : $scope.Date  , 'Hours' : $scope.Hours , 'Minutes' : $scope.Minutes })

    .success(function(){

        console.log("Data transfer");

    });

  }

  	


});