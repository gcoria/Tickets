function message(){

  var get_travels = {
    host: 'localhost',
    port: '5000',
    url: '/message',
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
    url: '/reserve',
    method: 'GET',
  };
 
  $.ajax(get_reserve);
}

function confirm(){

  var get_confirm = {
    host: 'localhost',
    port: '5000',
    url: '/confirm',
    method: 'GET',
  };
 
  $.ajax(get_confirm);
}

function cancel(){

  var get_cancel = {
    host: 'localhost',
    port: '5000',
    url: '/cancel',
    method: 'GET',
  };
 
  $.ajax(get_cancel);
}

