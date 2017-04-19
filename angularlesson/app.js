 angular.module("myApp",[])
  .controller("firstCtrl", function($scope){
  	// Create ariable
  	$scope.tempInput="Привет";
  	//Array
  	$scope.tasksArray=["Привет", "тест"];
    //Function
    $scope.addNew =function(){
    	if ($scope.tempInput) {
    	$scope.tasksArray.push($scope.tempInput);
    	$scope.tempInput="";
    }else{
    	alert("Пусто")
    }
    }
    $scope.deleteItem =function(item){
      var index= $scope.tasksArray.indexOf(item)
      console.log(index);
      $scope.tasksArray.splice(index,1);
    }
  });