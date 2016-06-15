/*(function ()
{
	'use strict';

	angular.module('myApp', ['ngMaterial', 'ngRoute', 'ngMessages', 'material.svgAssetsCache'])
	.controller('AppCtrl', AppCtrl)
	.run(function () { console.log('running app');});

	function AppCtrl($scope)
	{
		$scope.data = {
			selectedIndex: 0,
			secondLocked: true,
			secondLabel: "Item Two",
			bottom: false
		};

		$scope.next = function ()
		{
			$scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
		};

		$scope.previous = function ()
		{
			$scope.data.selectedIndex = Math.max($scope.data.selectedIndex -1, 0);
		};
	}
})();*/

angular.module("myApp", ['ngMaterial', 'ngRoute', 'ngMessages'])
.run(function ()
{
	console.log('running app');
})
.controller('AppCtrl', AppCtrl);

function AppCtrl($scope)
{
	$scope.data = {
		selectedIndex: 0,
		secondLocked: true,
		secondLabel: "Item Two",
		bottom: false
	};

	$scope.next = function ()
	{
		$scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
	};

	$scope.previous = function ()
	{
		$scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
	};
}