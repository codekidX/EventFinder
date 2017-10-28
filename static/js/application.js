var app = angular.module('eventFinder', ['ngMaterial']);
const serverUrl = "http://localhost:3000";
const getEvent = serverUrl + "/events/";

app.controller('defaultCtrl', function($scope, $http, $mdToast, $timeout,
	 $log, $location) {
		 var startDate = document.getElementById("inputStartDate");
		 var endDate = document.getElementById("inputEndDate");
		 var eventType = document.getElementById("inputEventType");

	$scope.sortSwitch = false;
	// responses from backend server [word frequency and it's count]
	$scope.responses = new Array();
	// settings for sorting [ng-repeat action on this array]
	$scope.settings = [
		{
			name: "Inbuilt",
			enabled: true
		}
	]

	/*
	* custom keypress actions
	*/
	$scope.wfKeyEvent = function (keyEvent) {
		if (keyEvent.which === 13) {
			$scope.submitClick();
		}
	}
	/*
	* show/hide instructions regarding sorting options
	* @param - shouldHide | Boolean
	*/
	$scope.showHideInstruction = function (shouldHide) {
			$scope.sortSwitch = shouldHide;
	}

	/*
	* shows a material toast type dialog
	* @params - message | String - message to display
	*					- time | Integer - in milliseconds to exit
	*/
	$scope.showToast = function (message, time) {
		$mdToast.show(
				$mdToast.simple()
					.textContent(message)
					.position('bottom left')
					.hideDelay(time)
			);
	}

	/*
	* ng-click action - sends an http request to backend with the value of the
	* 									input textarea and the sorting type
	*/
	$scope.submitClick = function() {

		let startDateValue = new Date(startDate.value).toISOString();
		let endDateValue = new Date(endDate.value).toISOString();
		let eventTypeValue = eventType.value;
		let eventQuery = getEvent + startDateValue + '/' + endDateValue + '/' + eventTypeValue;
		console.log(eventQuery);
		$http.get(eventQuery)
			.success(function(data, status, header, config) {
				// console.log(data);
				$scope.responses.push(data);
			});
	}
});
