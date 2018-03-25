angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Accounts) {
  
  $scope.account = {}; 
  $scope.addaccount = function(){
     if(!Accounts.exists($scope.account.email))
      {
        Accounts.save({
          id :0,
          name: $scope.account.name,
          weight:$scope.account.weight,
          email: $scope.account.email,
          vORn: $scope.account.vORn,
        });
      }
    }
  
})

.controller('FoodsCtrl', function($scope, Foods) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when $scope page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.totalCal = 0;
  $scope.foods = Foods.all();
  // $scope.remove = function(food) {
  //   Foods.remove(food);
  // };
  $scope.add  = function(food){
    $scope.totalCal+=parseFloat(food.calories);
  }

})

.controller('FoodDetailCtrl', function($scope, $stateParams, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableAccount: false
  };
});
