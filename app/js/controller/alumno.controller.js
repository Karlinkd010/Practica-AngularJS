var app= angular.module("index-template");

    app.controller("alumno-ver-controller",function($scope,$routeParams,$http){

        var codigo=$routeParams.codigo;
        $scope.alumno={};
        $http.get("https://localhost:44367/api/Alumno/Busca?idalumno="+codigo)
            .then(function(data){
                
                $scope.alumno=data.data;
                console.log($scope.alumno);
            },
            function(err){
                console.log(err);
        });
        
    });