'use strict';

/**
 * @ngdoc function
 * @name lastfmFetchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastfmFetchApp
 */
angular.module('lastfmFetchApp')
.controller('MainCtrl', function ($scope, LastFmResource) {

  $scope.topArtists = [];

  $scope.fetchTopArtists = function (user) {
    $scope.topArtists = LastFmResource.get({op: 'user.getTopArtists', user: user});
  };

});
