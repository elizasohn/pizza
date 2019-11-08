function Pizza (size, toppings,) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(toppings){
  if (this.toppings.length > 0) {
    this.price += this.toppings.length;
    // why doesn't this work?
    // this.toppings.forEach(function(toppings){
    //   this.price += 1;
    // })
  }
  if (this.size === 12){
    this.price += 12;
  }else if (this.size === 16){
    this.price += 16;
  }else if (this.size === 20){
    this.price += 20;
  }
  return this.price;
};

//User Interface Logic
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    var sizeInput = parseInt($("input:radio[name=size]:checked").val());

    var toppingsArray = [];
    var toppingsInputs;

    console.log("toppingsArray", toppingsArray);
    console.log("toppingsInput", toppingsInputs);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsInputs = $(this).val();
      toppingsArray.push(toppingsInputs);
      console.log("toppings array", toppingsArray);
      $("#toppings").append(toppingsInputs + "<br>");
    })


    var myPizza = new Pizza(sizeInput, toppingsArray);
    console.log(myPizza);
    var price = myPizza.getPrice();
    console.log("price", price);
    $(".results").show();
    $("#customer").append(nameInput);
    $("#pizzaSize").text(myPizza.size);
    $("#receipt").html(myPizza.price);


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
