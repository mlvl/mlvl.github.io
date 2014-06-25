'use strict';

angular.module('decisiveUigithubioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.showItem = function(index) {
      _.each($scope.items, function(item) {
        item.showing = false;
      })
      $scope.items[index].showing = true;
    };

    $scope.items = [
      {
        'title': 'Hierarchie',
        'description': 'A structured display of topics from discussion surrounding the MH-370 disappearance.',
        'image': 'app/images/hierarchie/hierarchie1.png',
        'showing': true
      }
    ];
  });
