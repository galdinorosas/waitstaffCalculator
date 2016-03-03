angular.module('myApp',['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'home.html',
			controller: 'homeCtrl'
		})
		.when('/new-meal',{
			templateUrl: 'newMeal.html',
			controller:'myCtrl'

		})
		.when('/my-earnings',{
			templateUrl: 'myEarnings.html',
			controller: 'myCtrl'

		});

	}])
		.controller('myCtrl',[ '$scope',function($scope){

			$scope.mealPrice = 0;
			$scope.taxRate = 0;
			$scope.tipPercentage = 0;
			$scope.subtotal = 0;
			$scope.tip = 0;
			$scope.total = 0;
			$scope.tipTotal = 0;
			$scope.mealCount = 0;
			$scope.avgTipPerMeal = 0;

			$scope.submit= function(){
				console.log($scope.mealForm);
				if($scope.mealForm.$valid ) {

				   	$scope.subtotal = 0;
					$scope.tip = 0;
					$scope.total = 0;
					$scope.subtotal = $scope.mealPrice * (1 + $scope.taxRate/100);
					$scope.tip = $scope.mealPrice * ($scope.tipPercentage/100);
					$scope.total = $scope.subtotal + $scope.tip;

					$scope.tipTotal = $scope.tipTotal + $scope.tip;
					$scope.mealCount = $scope.mealCount + 1;
					$scope.avgTipPerMeal = $scope.tipTotal / $scope.mealCount;

				} 
				else {
				    console.log('The form is invalid');
				}
				

			};

			$scope.cancel= function(){
				$scope.mealPrice = 0;
				$scope.taxRate = 0;
				$scope.tipPercentage = 0;
			};

			$scope.reset= function(){
				$scope.mealPrice = 0;
				$scope.taxRate = 0;
				$scope.tipPercentage = 0;
				$scope.subtotal = 0;
				$scope.tip = 0;
				$scope.total = 0;
				$scope.tipTotal = 0;
				$scope.mealCount = 0;
				$scope.avgTipPerMeal = 0;
			};

		}])
		.controller('homeCtrl', ['$scope', function($scope){




		}])
		.run(function($rootScope, $location) {
		    $rootScope.$on('$routeChangeError', function() {
		        $location.path('/');
		    });
		});;