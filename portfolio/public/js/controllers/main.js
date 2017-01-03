// angular.module('portfolio')
//   .controller('MainController', MainController);
//
// MainController.$inject = ['$rootScope', '$state'];
// function MainController($rootScope, $state) {
//   const main = this;
//
//   function nav() {
//     main.burgerOpen = false;
//   }
// }

angular.module('portfolio')
  .controller('MainController', MainController);

MainController.$inject = ['$scope'];
function MainController($scope) {
  const main = this;

  $scope.aboutClick = function() {
    this.aboutShow = true;
  };

  $scope.contactClick = function() {
    this.contactShow = true;
  };

  // $scope.hoverIn = function(){
  //   this.hoverShow = true;
  // };
  //
  // $scope.hoverOut = function(){
  //   this.hoverShow = false;
  // };

}
