'use strict';

/**
 * @ngdoc function
 * @name lastfmFetchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastfmFetchApp
 */
angular.module('lastfmFetchApp')
.controller('MainCtrl', function ($scope, LastFmFactory) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.topArtists = [];

  $scope.getTopArtists = function() {
    return LastFmFactory.getTopArtists();
  };

  LastFmFactory
  .getTopArtists()
  .then(function () {
    $scope.topArtists = LastFmFactory.topArtists;
  });
});
