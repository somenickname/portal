'use strict';

angular.module('appPortal.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tsd_requests', {
            templateUrl: 'scripts/tsd.html'
        });
    }]);
