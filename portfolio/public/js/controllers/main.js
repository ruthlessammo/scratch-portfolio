angular.module('portfolio')
  .controller('MainController', MainController);

MainController.$inject = ['$scope', '$rootScope'];
function MainController($scope, $rootScope, toState) {
  const main = this;

  // main.controllerName = toState.name; 
  // console.log(toState);


  $scope.aboutClick = function() {
    this.aboutShow = true;
  };

  $scope.contactClick = function() {
    this.contactShow = true;
  };

  $rootScope.$on('$stateChangeStart');
}
