function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(){
  this.toppings.forEach(function(topping){
    this.price += 1;
  });
  if (this.size === 16){
    this.price += 16;
  }else if (this.size === 14){
    this.price += 14;
  }else if (this.size === 12){
    this.price += 10;
  }
  return this.price;
};




//User Interface Logic
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    var toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsInputs = $(this).val();
      toppingsArray.push(toppingsInputs);
    })
    console.log(toppingsInputs);
    console.log(toppingsArray);

    // var sizeInput = $('.size').val();
    // toppingsInputs.each(function(toppingInput){
    //   toppingsArray.push(toppingsInputs.val());
    // });
    // var myPizza = new Pizza(sizeInput, toppingsArray);
    // var price = myPizza.getPrice();
  })
})





// $(document).ready(function(){
//   $("form#transportation_survey").submit(function(event){
//     event.preventDefault();
//     $("#work-responses").show();
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       $('#work-responses').append(workTransportationMode + "<br>");
//     });
//     $("#fun-responses").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var funTransportationMode = $(this).val();
//       $('#fun-responses').append(funTransportationMode + "<br>");
//     });
//     $('#transportation_survey').hide();
//   });
// });
