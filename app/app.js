var appPortal = angular.module('appPortal', ['ngRoute']);

appPortal.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'scripts/views/equipments.html',
            controller: 'equipmentsController'
        })

        .when('/access', {
            templateUrl: 'scripts/views/access.html',
            controller: 'accessController'
        })

        .when('/bugReports', {
            templateUrl: 'scripts/views/bugReport.html',
            controller: 'bugReportController'
        });
});

