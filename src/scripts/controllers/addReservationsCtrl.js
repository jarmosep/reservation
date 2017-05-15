app.controller("addReservationsCtrl", ["$scope", function($scope){
  $scope.reservedTimes = [];
  $scope.overlap = false;
  $scope.savedTimes = localStorage.getItem('reservedTimes'); // getting times from localStorage
  if($scope.savedTimes !== null){ // if something exists in localStorage, we will use those values
    $scope.reservedTimes = JSON.parse($scope.savedTimes);
  }

  $scope.makeReservation = function(roomName, startTime, endTime, username){
    $scope.overlap = false;
    var start = startTime.getTime(); // transforming date values to numbers, easier to check and compare them with existing dates
    var end = endTime.getTime();
    if($scope.reservedTimes.length == 0){
      $scope.reservedTimes.push({'room': roomName, 'times': [start,end], 'reservationBy': username }); // storing reservations into an array
    }else{
        // checking whether new time entries are overlapping with the existing reservation times, also in different rooms
        // yes, there might be more sophisticated ways to check this
      for(var i in $scope.reservedTimes){
        switch(roomName){ //for each room, we'll check the appropriate times
          case 'alpha':
            // check if new start value is equal or bigger than existing start values AND new start value is smaller than existing end times.
            // we'll also check if existing start values are equal or bigger than new start value AND existing start values are smaller than new value.
            if(start >= $scope.reservedTimes[i]['times'][0] && start <= $scope.reservedTimes[i]['times'][1] && roomName == $scope.reservedTimes[i]['room'] ||
            $scope.reservedTimes[i][0] >= start && $scope.reservedTimes[i][0] <= end && roomName == $scope.reservedTimes[i]['room'] ||
            end >= $scope.reservedTimes[i]['times'][0] && end <= $scope.reservedTimes[i]['times'][1] && roomName == $scope.reservedTimes[i]['room']) {
                alert("That time is overlapping in "+roomName+"!");
                $scope.overlap = true;
                break;
              }
          case 'beta':
            if(start >= $scope.reservedTimes[i]['times'][0] && start <= $scope.reservedTimes[i]['times'][1] && roomName == $scope.reservedTimes[i]['room'] ||
            $scope.reservedTimes[i][0] >= start && $scope.reservedTimes[i][0] <= end && roomName == $scope.reservedTimes[i]['room'] ||
            end >= $scope.reservedTimes[i]['times'][0] && end <= $scope.reservedTimes[i]['times'][1] && roomName == $scope.reservedTimes[i]['room']) {
                alert("That time is overlapping in "+roomName+"!");
                $scope.overlap = true;
                break;
              }
          case 'gamma':
            if(start >= $scope.reservedTimes[i]['times'][0] && start <= $scope.reservedTimes[i]['times'][1] && roomName == $scope.reservedTimes[i]['room'] ||
            $scope.reservedTimes[i][0] >= start && $scope.reservedTimes[i][0] <= end && roomName == $scope.reservedTimes[i]['room'] ||
            end >= $scope.reservedTimes[i]['times'][0] && end <= $scope.reservedTimes[i]['times'][1] && roomName == $scope.reservedTimes[i]['room']) {
                alert("That time is overlapping in "+roomName+"!");
                $scope.overlap = true;
                break;
              }
          default:
            console.log("do nothing");
        }
      }
      if($scope.overlap) {
        return $scope.makeReservation; // stop function if overlap happens
      }else{
        $scope.reservedTimes.push({'room': roomName, 'times': [start,end], 'reservationBy': username }); //otherwise add new object and save to localStorage
        localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
      }
    }
  }
  $scope.deleteReservation = function(index){ // additional feature: deletion of reservations
    $scope.reservedTimes.splice($scope.reservedTimes.indexOf(index),1);
    localStorage.setItem('reservedTimes', JSON.stringify($scope.reservedTimes));
  }
}]);
