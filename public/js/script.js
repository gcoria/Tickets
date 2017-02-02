function list_options(){
  var origin = $('#origin').val();
  var destiny = $('#destiny').val();

  var get_travels = {
    host: 'localhost',
    port: '5000',
    data: {
      'origin' : origin,
      'destiny' : destiny
    },
    url: '/list_options',
    method: 'GET',
  };
 
  $.ajax(get_travels).done(function(data) {
    $('#travels').html(data);
  });
}

function reserve(){
  var seat = $('#seat').val();

  var get_reserve = {
    host: 'localhost',
    port: '5000',
    data: {
      'seat' : seat
    },
    url: '/reserve',
    method: 'GET',
  };
 
  $.ajax(get_reserve);
}

function confirm(){
  var seat = $('#seat').val();
  alert("Estoy en confirm() script");
  var get_confirm = {
    host: 'localhost',
    port: '5000',
    data: {
      'seat' : seat
    },
    url: '/confirm',
    method: 'GET',
  };
 
  $.ajax(get_confirm);
}

function cancel(){
  var seat = $('#seat').val();

  var get_cancel = {
    host: 'localhost',
    port: '5000',
    data: {
      'seat' : seat
    },
    url: '/cancel',
    method: 'GET',
  };
 
  $.ajax(get_cancel);
}

