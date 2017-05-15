var app = angular.module('ilvesExam', []);

app.controller("addReservationsCtrl", ["$scope", function($scope){
  $scope.roomReservations = [];
  $scope.reservedTimes = [];
  $scope.savedReservations = localStorage.getItem('roomReservations'); // getting reservations from localStorage
  $scope.savedTimes = localStorage.getItem('reservedTimes'); // getting times from localStorage
  if($scope.savedReservations !== null && $scope.savedTimes !== null){ // if something exists in localStorage, we will use those values
    $scope.roomReservations = JSON.parse($scope.savedReservations);
    $scope.reservedTimes = JSON.parse($scope.savedTimes);
  }

  $scope.makeReservation = function(roomName, startTime, endTime, username){
    var start = startTime.getTime(); // transforming date values to numbers, easier to check and compare them with existing dates
    var end = endTime.getTime();
    if($scope.reservedTimes.length == 0){
      $scope.reservedTimes.push([start,end]); // storing reservations into an array
    }else{
      for(var i=0; i<$scope.reservedTimes.length; i++){
        // checking whether new time entries are overlapping with the existing reservation times, also in different rooms
        // yes, there might be more sophisticated ways to check this
        if ((start > $scope.reservedTimes[i][0] && start < $scope.reservedTimes[i][1] && roomName == 'alpha' ||
          $scope.reservedTimes[i][0] > start && $scope.reservedTimes[i][0] < end && roomName == 'alpha'||
          (start + end) == ($scope.reservedTimes[i][0] + $scope.reservedTimes[i][1]) && roomName == 'alpha') ||
          (start > $scope.reservedTimes[i][0] && start < $scope.reservedTimes[i][1] && roomName == 'beta' ||
          $scope.reservedTimes[i][0] > start && $scope.reservedTimes[i][0] < end && roomName == 'beta' ||
          (start + end) == ($scope.reservedTimes[i][0] + $scope.reservedTimes[i][1]) && roomName == 'beta') ||
          (start > $scope.reservedTimes[i][0] && start < $scope.reservedTimes[i][1] && roomName == 'gamma' ||
          $scope.reservedTimes[i][0] > start && $scope.reservedTimes[i][0] < end && roomName == 'gamma' ||
          (start + end) == ($scope.reservedTimes[i][0] + $scope.reservedTimes[i][1]) && roomName == 'gamma'))
        {
          alert("That time is overlapping!");
          return $scope.makeReservation; // stopping the function, if times overlap
        }
      }
      $scope.reservedTimes.push([start,end]);
    }
    $scope.roomReservations.push({ // pushing new reservation to array
      'room': roomName,
      'startTime': startTime,
      'endTime': endTime,
      'reservationBy': username
    });
    localStorage.setItem('roomReservations', JSON.stringify($scope.roomReservations)); // storing reservations and times to localStorage
    localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
  }
  $scope.deleteReservation = function(index){ // additional feature: deletion of reservations
    $scope.roomReservations.splice($scope.roomReservations.indexOf(index),1);
    $scope.reservedTimes.splice($scope.roomReservations.indexOf(index),1);
    localStorage.setItem('roomReservations', JSON.stringify($scope.roomReservations));
    localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
  }
}]);
