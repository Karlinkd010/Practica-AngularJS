var app =angular.module("index-template");

app.controller("profesor-controller", function($scope){
	$scope.profesor=profesorData;
	$scope.editarProfesor=[];
	console.log($scope.profesor);

	$scope.Editar= function(){
		angular.copy($scope.profesor, $scope.editarProfesor);

	}
	$scope.Guardar=function(){
		angular.copy($scope.editarProfesor, $scope.profesor);
		
	}
	$scope.Cancelar=function(){
		$scope.editarProfesor={};
	}

});


var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}