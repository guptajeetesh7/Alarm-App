var app = angular.module("myApp",['ngRoute']);

app.controller('alarm',function($scope,$interval,$http){
   
   $scope.info="";




$scope.submit =function(){

  if($scope.Date==null || $scope.Hours==null || $scope.Minutes==null)
  {
    alert("Please Fill All The Entry");
  }

  else{

    if($scope.ampm==1){

          $scope.Hours = parseInt($scope.Hours) + 12 ;
    }



 $http.post("index.php",{ 'Date' : $scope.Date  , 'Hours' : $scope.Hours , 'Minutes' : $scope.Minutes ,'am' : $scope.ampm })

    .success(function(){

        console.log("Data transfer");
        $scope.Date = null;
        $scope.Hours =null;
        $scope.Minutes =null;
        $scope.ampm=null;

        alert ("Alarm added");

        $scope.displayData();

    });



  }

    }

    $scope.timeformat = function(time){

      if(time>12){
          time = time- 12;
          $scope.time_format= time;

      }
        else{
          alert()
          $scope.time_format=time;
        }


      return time;


    }


       $scope.displayData = function(){


      $http.get("getdata.php").success(function(data){

          $scope.info=data;

      });

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



app.config(function($routeProvider){

  $routeProvider
    .when('/',{

      templateUrl : "login.html",
      controller : 'loginCtrl'
      
    })

    .when('/alarm',{

      resolve : {

        'check' : function($rootScope ,$location){
          if (!$rootScope.loggedIn) {
            $location.path("/");
          }
        }

      },

      templateUrl : 'alarm.html',
      controller : 'alarm'
    })

    
});


app.controller('loginCtrl',function($scope , $location ,$rootScope){

   $scope.Login=function(){

   

  if($scope.username== "admin" && $scope.password=="admin")
  {
    $rootScope.loggedIn=true;  
    $location.path('/alarm');
    alert("Directing you");
  }
  else{

    alert("Wrong account");
  }
  }

  $scope.pword = function()
  {
    alert('username=admin amd password=admin  Another database can be created as I created for Alarm page to handele the username and password !!' );
  }

});