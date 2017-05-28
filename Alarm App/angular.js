var app = angular.module("myApp",[]);

app.controller('alarm',function($scope,$interval,$http){
   
   $scope.info="";




$scope.submit =function(){

 $http.post("index.php",{ 'Date' : $scope.Date  , 'Hours' : $scope.Hours , 'Minutes' : $scope.Minutes })

    .success(function(){

        console.log("Data transfer");
        $scope.Date = "";
        $scope.Hours ="";
        $scope.Minutes ="";

        alert ("Alarm added");

        $scope.displayData();

    });

    $scope.displayData = function(){

      $http.get("getdata.php").success(function(data){

          $scope.info=data;
      });

    }

  }

  $scope.time = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.time = new Date().toLocaleTimeString();
      $scope.alarm = new Date();




      for($scope.i =0 ; $scope.i<$scope.info.length ; $scope.i++)
      {
        
      // console.log($scope.info[2].Date+"---" + $scope.info[2].Hours+"----" + $scope.info[2].Minutes);

        if($scope.info[$scope.i].Date== $scope.alarm.getDate() && $scope.info[$scope.i].Hours== $scope.alarm.getHours() && $scope.info[$scope.i].Minutes== $scope.alarm.getMinutes() && ($scope.alarm.getSeconds()==0))
            {
              console.log("Alarm");
              alert("          RING RING        ");
            }


      }

  }, 1000);


  $scope.delete = function(delete_id){

    $http.post("delete.php",{'id' : delete_id}).success(function(){

        $scope.displayData();

    });

  }


  	


});