var appPortal = angular.module('appPortal', [
    'ngRoute',
    'ngCookies',
    'appPortal.home'
]);

appPortal.config(function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/tsd_requests'
    });
})
    .controller("TabController", ['$scope', '$cookies', function ($scope, $cookies) {
        this.tab = 1;

        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function (setTab) {
            this.tab = setTab;
        };

        $scope.reasons = ['Breakdown', 'Upgrade', 'Individual preferences', 'Other'];
        $scope.criticalities = ['Low: nice-to-have', 'Medium:ready to be patient, but not for too long', 'High: blocker for work'];
        $scope.services = ['Tachometer Ltd', 'HR Grades', 'HR Portal'];

        $scope.sendEquipmentRequest = function (request) {
            $cookies.put('tsd_request', JSON.stringify(request));
        };
    }]);
