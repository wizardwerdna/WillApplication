'use strict';
describe('A Bowling Application', function(){
  var app;
  beforeEach(module('app'));
  beforeEach(inject(function($compile, $rootScope){
    app = $compile(
      '<div ng-controller="BowlVM as vm">\
        <div class="line-display">{{lineDisplay}}</div>\
        <div class="rolls" ng-click="lineDisplay=\'-\'"></div>\
        <div class="reset" ng-click="lineDisplay=\'\'"></div>\
      <div>'
    )($rootScope);
    $rootScope.$digest();
  }));
  it('should features data entry and line display', function(){
    expect(app.find('.line-display').text()).toBe('');

    app.find('.rolls').click();
    expect(app.find('.line-display').text()).toBe('-');

    app.find('.reset').click();
    expect(app.find('.line-display').text()).toBe('');
  });
});
