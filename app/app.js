var appPortal = angular.module('appPortal', [
    'ngRoute',
    'appPortal.home'

]);

appPortal.config(function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/tsd_requests'
    });

    //.when('/', {
    //    templateUrl: 'scripts/views/equipments.html',
    //    controller: 'mainController'
    //});

//        .when('/equipments', {
//            templateUrl: 'scripts/views/equipments.html',
//            controller: 'equipmentsController'
//        })
//
//
//        .when('/access', {
//            templateUrl: 'scripts/views/access.html',
//            controller: 'accessController'
//        })
//
//        .when('/bugReports', {
//            templateUrl: 'scripts/views/bugReport.html',
//            controller: 'bugReportController'
//        });
})
    .controller("TabController", function ($scope) {
        this.tab = 1;

        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function (setTab) {
            this.tab = setTab;
        };

        $scope.reasons = ['Breakdown', 'Upgrade', 'Individual preferences', 'Other'];
        $scope.criticalities = ['Low: nice-to-have', 'Medium:ready to be patient, but not for too long', 'High: blocker for work'];
        $scope.services= ['Tachometer Ltd', 'HR Grades', 'HR Portal'];
    });