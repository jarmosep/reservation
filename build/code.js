var app = angular.module('ilvesExam', []);

app.controller("addReservationsCtrl", ["$scope", function($scope){
  localStorage.clear();
  $scope.reservedTimes = [];
  $scope.overlap = false;
  $scope.savedTimes = localStorage.getItem('reservedTimes'); // getting times from localStorage
  if($scope.savedTimes !== null){ // if something exists in localStorage, we will use those values
    $scope.reservedTimes = JSON.parse($scope.savedTimes);
  }
  var alpha = [];
  var beta = [];
  var gamma = [];
  $scope.reservedTimes.push(alpha,beta,gamma);

  var doesOverlapOccur = function(startTime, endTime, oldReservations){
    var oldStartTime;
    var oldEndTime;
    for(var i=0; i<oldReservations.length; i++){
      console.log($scope.reservedTimes);
      oldStartTime = oldReservations[i].times[0];
      oldEndTime = oldReservations[i].times[1];
      if(startTime >= oldStartTime && startTime <= oldEndTime || // Check if new starting time is between old reservation times
         oldStartTime >= startTime && oldStartTime <= endTime || // Check if old starting time is between new reservation times
         endTime >= oldStartTime && endTime <= oldEndTime || // Check if new ending time is between old reservation times
         startTime <= oldStartTime && endTime >= oldEndTime) // Check if new starting and ending time do not contain old reservation times.
         {
           alert("Overlap!");
           $scope.overlap = true;
         }
      }
  }

  $scope.makeReservation = function(roomName, startTime, endTime, username){
    $scope.overlap = false;
    var start = startTime.getTime();
    var end = endTime.getTime();
    var room = $scope.reservedTimes[roomName];
    doesOverlapOccur(start, end, room);
    if($scope.overlap){
      return $scope.makeReservation;
    }else{
      if( roomName == 0 ) {
        room.push({
          'room': roomName,
          'times': [start,end],
          'reservationBy': username
        }); // storing reservations into an array
        console.log(room);
      } else if( roomName == 1 ) {
        room.push({
          'room': roomName,
          'times': [start,end],
          'reservationBy': username
        }); // storing reservations into an array
        console.log(room);
      } else if( roomName == 2 ) {
        room.push({
          'room': roomName,
          'times': [start,end],
          'reservationBy': username
        }); // storing reservations into an array
        console.log(room);
      } else {
        console.log("No value.");
      }
      
    }
  }

  $scope.deleteReservation = function(index){ // additional feature: deletion of reservations
    for( var i=0; i<$scope.reservedTimes.length; i++ ) {
      $scope.reservedTimes[i].splice($scope.reservedTimes[i].indexOf(index),1);
    }
    localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
  }
}]);
