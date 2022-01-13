var app= angular.module("index-template");

    app.controller("alumno-controller",function($scope,$http){
        $scope.tableAlumno='tables/table.alumno.html';
        $scope.heroes=[];
        $scope.pagina=15;

        $http.get("https://localhost:44367/api/Alumno")
            .then(function(data){
                
                $scope.heroes=data.data;
                $scope.totalpage=$scope.heroes.length;
            },
            function(err){
                console.log(err);
        });

        $scope.siguiente =function(){
            
            if($scope.heroes.length > $scope.pagina){
                $scope.pagina += 15
            }
        }
        $scope.anterior =function(){

            if($scope.pagina > 15){
                $scope.pagina -= 15
            }
        }
        
        
    });