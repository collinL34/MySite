angular.module('PortfolioCtrl', [])
    .controller('PortfolioCtrl', function($scope) {
        $scope.Autism = function() {
            window.location = 'http://autism-talks.herokuapp.com/';
        };

        $scope.bearHugs = function() {
            window.location = 'http://bear-hug.herokuapp.com/';
        };

        $scope.magic = function() {
            window.location = 'https://board-game-tracker.herokuapp.com/';
        };

        $scope.collLink = function() {
            window.location = 'https://www.linkedin.com/in/collin-shelby/';
        };

        $scope.chrisLink = function() {
            window.location = 'https://www.linkedin.com/in/christian-acuna/';
        };
        $scope.johnLink = function() {
            window.location = 'https://www.linkedin.com/in/john-winslow/';
        };

        $scope.branLink = function() {
          window.location = 'https://www.linkedin.com/in/bhuang111/';
        };

    })
