function message(){

  var get_travels = {
   host: 'localhost',
   port: '5000',
   path: '/message',
   method: 'GET',
 };
 
 $.ajax(get_travels);
}


// function ....(){

//   var get_travels = {
//    host: 'localhost',
//    port: '5000',
//    path: '/message',
//    method: 'GET',
//  };
 
//  $.ajax(get_travels);
// }