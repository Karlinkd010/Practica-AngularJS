var app= angular.module("index-template");

    app.controller("coments-controller",function($scope,$http){
        $scope.nombre="Karlin";
    
        
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

        
        
    });