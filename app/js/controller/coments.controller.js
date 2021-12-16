var app= angular.module("index-template");

    app.controller("coments-controller",function($scope,$http){
        $scope.nombre="Karlin";
        $scope.heroes=[];
        $scope.newComentario=[];
        $scope.cometarios=[
            {
                comentario:"Buen toturial",
                usuario:"Codigo Facilito"
            },
            {
                comentario:"Mal toturial",
                usuario:"Udemy"
            }
        ];

        $scope.Agregar=function(){
            $scope.cometarios.push($scope.newComentario);
            $scope.newComentario={};
        }

        $http.get("http://localhost:3000/heroes")
            .then(function(data){
                
                $scope.heroes=data.data;
                console.log($scope.heroes)
            },
            function(err){
                console.log(err);
            });
        
    });