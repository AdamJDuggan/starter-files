fetch('http://rest.learncode.academy/api/johnbob/friends')
  .then(response => response.json()) // response.json() returns a promise
  .then((response) => {
    console.log("I have friends!", response); //returns all of johnbob's friends
  })



$(function(){
  var $orders = $('#orders');
  $.ajax({
      type: GET,
      url: '/api/orders',
      success: function(orders):{
        // goes through each item in an array. For
        // each item in array we will run a function
        $.each(orders, function(i, item){
          $ orders.append('<li>name: ' +  order.name
          + 'order.drink' '</li>');
        });
      }
  });
});
