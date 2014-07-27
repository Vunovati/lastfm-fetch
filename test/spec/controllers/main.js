'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmFetchApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, LastFmResource) {
    scope = $rootScope.$new();
    scope.LastFmResource = LastFmResource;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should attach a list of users top Artist to the scope', function () {
    expect(scope.topArtists.length).toBe(50);
  });
});
