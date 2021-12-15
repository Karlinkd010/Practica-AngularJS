var app= angular.module("ToDoList-module",["LocalStorageModule"]);
    app.controller("localstorage-controller",function($scope,localStorageService){
        $scope.name="Desde Controller";
       

        if(localStorageService.get("list_localstorage")){
            $scope.lista=localStorageService.get("list_localstorage");
        }else{
            $scope.lista=[];

        }
        

        // $scope.activity.fecha=new Date();

        $scope.AddActivity=function(){
            console.log($scope.activity);
            $scope.lista.push($scope.activity);

            localStorageService.set("list_localstorage",$scope.activity);
        
            $scope.activity={};
        }

    });
