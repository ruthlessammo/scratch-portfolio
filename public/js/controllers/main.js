angular.module('portfolio')
  .controller('MainController', MainController);

MainController.$inject = ['$scope', '$rootScope'];
function MainController($scope, $rootScope) {
  const main = this;

  $scope.aboutClick = function() {
    this.aboutShow = true;
  };

  $scope.contactClick = function() {
    this.contactShow = true;
  };

  function secureState(e, toState) {
    main.controllerName = toState.name;
    console.log(toState.name);
  }

  $rootScope.$on('$stateChangeStart', secureState);
}
