var app= angular.module("index-template");

    app.controller("coments-controller",function($scope,$http){
        $scope.nombre="Karlin";
        $scope.heroes=[];
        $scope.pagina=15;
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

        $http.get("https://localhost:44367/api/Alumno")
            .then(function(data){
                
                $scope.heroes=data.data;
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