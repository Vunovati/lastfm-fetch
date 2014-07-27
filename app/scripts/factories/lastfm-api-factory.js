'use strict';

angular.module('lastfmFetchApp').
  factory('LastFmFactory', function LastFmFactory ($http) {

  var urlBase = 'http://ws.audioscrobbler.com/2.0/';
  var requestParams = {
    method: 'user.getTopArtists',
    api_key: '300e96d1eeb49e5a0c0ecba01970b8e4',
    limit: '50',
    user: 'Vunovati',
    format: 'json'
  };

  var artists = [];

  var fetchTopArtists = function () {
    return $http({
      method: 'GET',
      url: urlBase,
      params: requestParams
    })
    .success(function (data) {
      console.log(data);
      artists = data.topartists;
    })
    .error(function () {
      console.log(status);
    });
  };

  return {
    topArtists: artists,
    getTopArtists: fetchTopArtists
  };
});
