//JobListController define
myApp.controller('JobListController',
    function($scope, $http, $location) {
        $scope.currentStartNumber;

        $scope.init = function() {
            $http.get('/jobs/0').
                success(function(data) {
                    $scope.jobs = data.jobs;

                    $scope.currentStartNumber = 10;
            });
        };

        $scope.loadMore = function() {
            $http.get('/jobs/' + $scope.currentStartNumber + '').
                success(function(data) {

                data.jobs.forEach(function(item) {
                    $scope.jobs.push(item);
                });

                $scope.currentStartNumber = parseInt(10) + 10;
            });
        }
    }
);