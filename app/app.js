var appPortal = angular.module('appPortal', [
    'ngRoute',
    'appPortal.home'
]);

appPortal.config(function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/tsd_requests'
    });
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
        $scope.services = ['Tachometer Ltd', 'HR Grades', 'HR Portal'];

        $scope.sendEquipmentRequest = function (request) {
            document.cookie = request;
        };
    });