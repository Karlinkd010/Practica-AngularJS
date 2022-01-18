
    // include ngRoute for all our routing needs
    var demoApp = angular.module('index-template', ['ngRoute','LocalStorageModule']);

    // configure our routes
    demoApp.config(function($routeProvider) {
  $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'view/comentsl.view.html',
                controller  : 'coments-controller'
            })
            .when('/Calendar', {
                templateUrl : 'view/localstorage.view.html',
                controller  : 'localstorage-controller'
            })

            .when('/Search', {
                templateUrl : '',
                controller  : ''
            })
            .when('/Profesor', {
                templateUrl : 'view/profesor.view.html',
                controller  : 'profesor-controller'
            })
            .when('/Personas', {
                templateUrl : 'view/personas.view.html',
                controller  : 'personas-controller'
            })
            .when('/Alumno', {
                templateUrl : 'view/alumno.view.html',
                controller  : 'alumno-controller'
            })
            .when('/Alumno/Ver/:codigo', {
                templateUrl : 'view/alumno.ver.view.html',
                controller  : 'alumno-ver-controller'
            })
            .when('/Login', {
                templateUrl : '',
                controller  : ''
            })

    });
