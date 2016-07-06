var myApp = angular.module('myApp', [ 'ngRoute' ]);

//MyApp router define
myApp.config(function($routeProvider) {
    $routeProvider.when('/job-list', {
        templateUrl : 'modules/job-posting/job-posting.html',
        controller : 'JobListController'
    })

    .otherwise({
        redirectTo : '/job-list'
    });
});

//MainController define
myApp.controller('MainController',
    function($scope, $location) {
    }
);