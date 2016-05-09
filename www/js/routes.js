angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.notifications', {
    url: '/notifications',
    views: {
      'side-menu': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

  .state('menu.informations', {
    url: '/informations',
    views: {
      'side-menu': {
        templateUrl: 'templates/informations.html'
      }
    }
  })

  .state('menu.historicQuotations', {
    url: '/historicQuotations',
    views: {
      'side-menu': {
        templateUrl: 'templates/historicQuotations.html',
        controller: 'historicQuotationsCtrl'
      }
    }
  })

  .state('menu.historicAverages', {
    url: '/historicAverages',
    views: {
      'side-menu': {
        templateUrl: 'templates/historicAverages.html',
        controller: 'historicAveragesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/informations')

  

});