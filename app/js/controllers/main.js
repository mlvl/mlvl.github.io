'use strict';

angular.module('decisiveUigithubioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      {
        'title': 'Project One',
        'description': 'This is a project we worked on',
        'image': 'app/images/hierarchie/hierarchie1.png'
      },
      {
        'title': 'Project Two',
        'description': 'This is a project we worked on',
        'image': 'app/images/hierarchie/hierarchie1.png'
      },
    ];
  });
