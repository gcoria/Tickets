function list_options(){
  var get_travels = {
    host: 'localhost',
    port: '5000',
    data: {
      origin : $('#origin').val(),
      destiny : $('#destiny').val()
    },
    url: '/list_options',
    method: 'GET',
  };
 
  $.ajax(get_travels).done(function(data) {
    $('#travels').html(data);
  });
}

function reserve(){

  var get_reserve = {
    host: 'localhost',
    port: '5000',
    data: {
      seat : $('#seat').val()
    },
    url: '/reserve',
    method: 'GET',
  };
 
  $.ajax(get_reserve);
}

function confirm(){
  alert("Estoy en confirm() script");
  var get_confirm = {
    host: 'localhost',
    port: '5000',
    data: {
      seat : seat = $('#seat').val()
    },
    url: '/confirm',
    method: 'GET',
  };
 
  $.ajax(get_confirm);
}

function cancel(){
  var get_cancel = {
    host: 'localhost',
    port: '5000',
    data: {
      seat : $('#seat').val()
    },
    url: '/cancel',
    method: 'GET',
  };
 
  $.ajax(get_cancel);
}

