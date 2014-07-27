'use strict';

angular.module('lastfmFetchApp').
  factory('LastFmResource', function ($resource) {

  var urlBase = 'http://ws.audioscrobbler.com/2.0/';
  var requestParams = {
    method: 'user.getTopArtists',
    api_key: '300e96d1eeb49e5a0c0ecba01970b8e4',
    limit: '5',
    user: 'Vunovati',
    format: 'json'
  };

  return $resource('http://ws.audioscrobbler.com/2.0/?method=:op&user=:user&api_key=:key&format=json&limit=:limit', {},
                   {get: {method: 'GET', params: {key: requestParams.api_key, limit: requestParams.limit}}});
});
