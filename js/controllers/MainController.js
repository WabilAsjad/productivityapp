app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Productivity'; 
  $scope.promo = 'Tips and Tools';
  $scope.products = [
  	{ 
    	name: 'Time Management', 
    	pubdate: new Date('2019', '08', '01'), 
    	cover: 'time-management.png',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Preparation', 
    	pubdate: new Date('2019', '08', '01'), 
    	cover: 'targeting.png',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Minimizing Distractions', 
    	pubdate: new Date('2019', '08', '01'), 
    	cover: 'visitor.png',
    	likes: 0,
    	dislikes: 0 
  	}, 
  	{ 
    	name: 'Establishing a Routine', 
    	pubdate: new Date('2019', '08', '01'), 
    	cover: 'link.png',
    	likes: 0,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);

