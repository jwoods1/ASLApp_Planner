 angular
    .module('app')
    .config(routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider){

    	$urlRouterProvider.otherwise("/")

    	$stateProvider
    		.state('home', {
    			url: '/',
    			templateUrl: 'app/home/home.html',
    			controller: 'HomeCtrl',
    			controllerAs: 'vm'
    		});
  	}