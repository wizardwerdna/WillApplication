'use strict';
describe('ViewModel BowlVM', function(){
  var vm = {};

  beforeEach(function(){
    module('app');
    inject(function($controller){
      vm = $controller('BowlVM', {scorer: scorer});
    });
  });

  var mockLineDisplays = {};

  function rollsToStr(rolls){
    if(!rolls) return '<undefined>';
    return '['+rolls.toString()+']';
  }

  function scorer(rolls){
    var mockLineDisplay = {mock: 'lineDisplay for '+rollsToStr(rolls)};
    mockLineDisplays[rolls] = mockLineDisplays[rolls] || {
      lineDisplay: function(){ return mockLineDisplay; }
    };
    return mockLineDisplays[rolls];
  }

  it('when created, update vm.lineDisplay from scorer([])', function(){
    expect(vm.lineDisplay).toBe(scorer([]).lineDisplay());
  });

  it('after gutter ball, update vm.lineDisplay from scorer([0])', function(){
    vm.addRoll(0);
    expect(vm.lineDisplay).toBe(scorer([0]).lineDisplay());
  });

  it('after strike, update vm.lineDisplay from scorer([0])', function(){
    vm.addRoll(10);
    expect(vm.lineDisplay).toBe(scorer([10]).lineDisplay());
  });

  it('after gutter spare, update vm.lineDisplay from scorer([0, 10])', function(){
    vm.addRoll(0);
    vm.addRoll(10);
    expect(vm.lineDisplay).toBe(scorer([0, 10]).lineDisplay());
  });

  it('after reset, update vm.lineDisplay from scorer([])', function(){
    vm.lineDisplay = null;
    vm.reset();
    expect(vm.lineDisplay).toBe(scorer([]).lineDisplay());
  });
});
