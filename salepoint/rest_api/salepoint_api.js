/**
 * confirmTravels(path): confirm the travels in the given path.
 */
function confirmTravels(path,reserves){
  var totalTravels = path.length-1;
  var confirmedTravels = 0;
  var travelPath = path;
  var allReserves = reserves;
  var confirmationCancelled = false;

  for(var i=0; i < totalTravels; i++) {
    var travelInPath = travels.edge({ v: path[i], w: path[i+1] });
    console.log("[LOG] - Sending confirmation request for travel");
    var reserve = getReserveAssociatedToTravel(travelInPath,reserves);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText === 'CONFIRMATION_SUCCESS') {
          confirmedTravels++;
          console.log("[LOG] - Travel confirmed successfully");
          if (confirmedTravels === totalTravels) {
            console.log("[LOG] - All travels confirmed successfully");
            fillTableWithFinalStep(travelPath,allReserves);
          }
        } else {
          if (!confirmationCancelled) {
            console.log("[LOG] - Travel confirmation error. All the travels will be cancelled.");
            confirmationCancelled = true;
            alert('A confirmation has failed. All the confirmations will be cancelled');
            cancelConfirmation(path,reserves);
            cleanTable();
          }
        }
      }
    };
    xhttp.open("POST", travelInPath.providerUrl +"/confirmation", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    time_stamp++;
    xhttp.send(JSON.stringify({travelId:travelInPath.id, time_stamp:time_stamp, reserve: reserve}));
  }
}

/**
 * getReserveAssociatedToTravel(travel,reserves): get the reserve associated to the travel.
 */
function getReserveAssociatedToTravel(travel,reserves) {
  for (var i = 0; i < reserves.length; i++) {
    if (reserves[i].travelId === travel.id) {
      return reserves[i];
    }
  } 
}