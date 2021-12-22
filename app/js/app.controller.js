
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
            .when('/Login', {
                templateUrl : '',
                controller  : ''
            })

    });
