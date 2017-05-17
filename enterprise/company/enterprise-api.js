// This module contains all the confirmation functionality.

//var reservation = require('./reservation');
module.exports = EnterpriseApi;

function EnterpriseApi() {}

EnterpriseApi.buildConfirmation = function(req, res, timeStamp) {
  var confirmation = {};
  //confirmation.travelId = req.body.travelId;
  //confirmation.reserve = req.body.reserve;
  confirmation.timeStamp = timeStamp;
  confirmation.res = res;
  return confirmation;
};

EnterpriseApi.buildReservation = function(req, res, timeStamp) {
  var reservation = {};
  //reservation.travelId = req.body.travelId;
  //reservation.reserve = req.body.reserve;
  reservation.timeStamp = timeStamp;
  reservation.res = res;
  return reservation;
};

EnterpriseApi.buildCancelation = function(req, res, timeStamp) {
  var cancelation = {};
  //cancelation.travelId = req.body.travelId;
  //cancelation.reserve = req.body.reserve;
  cancelation.timeStamp = timeStamp;
  cancelation.res = res;
  return cancelation;
};
