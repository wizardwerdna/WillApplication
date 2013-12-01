'use strict';

angular.module('app', [])

.controller('BowlVM', function(scorer){
  var rolls;

  this.addRoll = function(pins){
    rolls.push(pins);
    update(this);
  };

  this.reset = function(){
    rolls = [];
    update(this);
  };

  this.reset();

  function update(vm){
    vm.lineDisplay = scorer(rolls).lineDisplay();
  }


})

.factory('scorer', function(){
  return function(rolls){
    return {
      lineDisplay: function(){
        if (rolls.length === 0) return '';
        return '-';
      }
    };
  };
});
