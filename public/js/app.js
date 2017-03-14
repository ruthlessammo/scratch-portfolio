angular
.module('portfolio', ['ngResource', 'ngAnimate', 'ui.router', 'satellizer'])
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('projectsIndex', {
    url: '/projects',
    templateUrl: '/templates/projectsIndex.html',
    controller: 'ProjectsIndexController as projectsIndex'
  })
  .state('projectsShow', {
    url: '/projects/:id',
    templateUrl: '/templates/projectsShow.html',
    controller: 'ProjectsShowController as projectsShow'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/templates/about.html'
  })
  .state('skills', {
    url: '/skills',
    templateUrl: '/templates/skills.html'
  })
  .state('splash', {
    url: '/',
    templateUrl: '/templates/splash.html'
  });

  $urlRouterProvider.otherwise('/');
}
