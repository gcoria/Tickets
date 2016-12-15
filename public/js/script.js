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

