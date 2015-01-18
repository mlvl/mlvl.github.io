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
        'description': 'A structured display of topics from discussion surrounding the MH-370 airliner disappearance.',
        'image': 'app/images/hierarchie/hierarchie1.png',
        'showing': true,
        'href': 'http://mlvl.github.io/Hierarchie'
      },
      {
        'title': 'FCC Comments Anaylsis',
        'description': 'A topical analysis of half a million comments to the FCC reguarding net neutrality.',
        'image': 'app/images/fcc_comments/fcc.png',
        'showing': true,
        'href': 'http://mlvl.github.io/fcc-comments/#/'
      },
      {
        'title': 'BrooklynJS Presentation',
        'description': 'MLVL member Meredith Myers presented personal project "Ratmap" at BrooklynJS.',
        'image': 'app/images/brooklynjs/ratmap.png',
        'showing': true,
        'href': 'http://meredithmmyers.com/ratmap'
      }
    ];

    $scope.tech = [{
        'name': 'Topic Modeling',
        'icon': 'icon-list2'
    }, {
        'name': 'Semantic Role Labeling',
        'icon': 'icon-tag2'
    }, {
        'name': 'Semantic Search',
        'icon': 'icon-search'
    }, {
        'name': 'Sentiment Analysis',
        'icon': 'icon-thumbs-up'
    }, {
        'name': 'Authorship Analysis',
        'icon': 'icon-library'
    }, {
        'name': 'Product Generation',
        'icon': 'icon-file-powerpoint'
    }, {
        'name': 'Entity Relationships',
        'icon': 'icon-users'
    }]

  });
