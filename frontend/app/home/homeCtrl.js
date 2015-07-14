var controllerId = 'HomeCtrl';

angular
	.module('app')
	.controller(controllerId, HomeCtrl);

	HomeCtrl.$inject = ['$scope'];

	function HomeCtrl($scope){

		var vm = this;

		vm.test = {'test': 'test'};
		
	}