angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, account) {
  alert('Inside');
  //var account = accounts;
  var account = {};
  alert(account);
  var addaccount = function(){
    account.id = 0;
    account.name = $scope.account.name;
    account.weight = $scope.account.weight;
    account.email = $scope.account.email;
    account.vORn = $scope.account.vORn;
    if(account.name != null)
    {
      alert('Added successfully' + account);
    }

  }
})

.controller('FoodsCtrl', function($scope, Foods) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.foods = Foods.all();
  $scope.remove = function(Food) {
    Foods.remove(food);
  };

})

.controller('FoodDetailCtrl', function($scope, $stateParams, Foods) {
  $scope.foods = Foods.get($stateParams.foodId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableAccount: false
  };
});
