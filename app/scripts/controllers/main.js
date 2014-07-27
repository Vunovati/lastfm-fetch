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

  $scope.topArtists = LastFmResource.get({op: 'user.getTopArtists', user: 'Vunovati'});
  //$scope.artists = $scope.topArtists.topartist.artist;
});
