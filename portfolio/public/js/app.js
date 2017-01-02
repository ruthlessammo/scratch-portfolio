angular
.module('portfolio', ['ngResource', 'ngAnimate', 'ui.router', 'satellizer'])
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
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
    url: '/',
    templateUrl: '/templates/about.html'
  })
  .state('skills', {
    url: '/skills',
    templateUrl: '/templates/skills.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/templates/contact.html'
  });

  $urlRouterProvider.otherwise('/');
}
