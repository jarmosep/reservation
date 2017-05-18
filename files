var app = angular.module('ilvesExam', []);

app.controller("addReservationsCtrl", ["$scope", function($scope){
  $scope.reservedTimes = [];
  $scope.overlap = false;
  $scope.savedTimes = localStorage.getItem('reservedTimes'); // getting times from localStorage
  if($scope.savedTimes !== null){ // if something exists in localStorage, we will use those values
    $scope.reservedTimes = JSON.parse($scope.savedTimes);
    console.log($scope.reservedTimes);
  }else{
    var alpha = [];
    var beta = [];
    var gamma = [];
    $scope.reservedTimes.push(alpha,beta,gamma);
  }


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
  };

  var sortReservations = function(startTime, room, roomIndex){
    for(key in room){
      console.log($scope.reservedTimes[roomIndex]);
      if(startTime < room[key].times[0]){
        $scope.reservedTimes[roomIndex].sort(function(a, b) {
          return parseFloat(a.times) - parseFloat(b.times);
        });
      }
    }
  };

  $scope.makeReservation = function(roomIndex, startTime, endTime, username){
    $scope.overlap = false;
    var start = startTime.getTime();
    var end = endTime.getTime();
    var room = $scope.reservedTimes[roomIndex];
    doesOverlapOccur(start, end, room);
    if($scope.overlap){
      return $scope.makeReservation;
    }else{
      if( roomIndex == 0 ) {
        room.push({
          'room': roomIndex,
          'times': [start,end],
          'reservationBy': username
        }); // storing reservations into an array
        console.log(room);
      } else if( roomIndex == 1 ) {
        room.push({
          'room': roomIndex,
          'times': [start,end],
          'reservationBy': username
        }); // storing reservations into an array
        console.log(room);
      } else if( roomIndex == 2 ) {
        room.push({
          'room': roomIndex,
          'times': [start,end],
          'reservationBy': username
        }); // storing reservations into an array
        console.log(room);
      } else {
        console.log("No value.");
      }
      sortReservations(start,room,roomIndex);
      localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
    }
  }

  $scope.deleteReservation = function(reservation, room){ // additional feature: deletion of reservations
    console.log(room);
    for(var key in room){
      console.log(key);
      console.log(room[key]);
      if(reservation == room[key]){
        room.splice(room.indexOf(reservation),1);
      }
    }
    localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
  }
}]);
