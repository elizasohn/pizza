function Pizza (size, toppings,) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(toppings){
  if (this.toppings.length > 0) {
    this.price += this.toppings.length;
  }
  if (this.size === "12 Inch (Small)"){
    this.price += 12;
  }else if (this.size === "16 Inch (Medium)"){
    this.price += 16;
  }else if (this.size === "20 Inch (Large)"){
    this.price += 20;
  }
  return this.price;
};

//User Interface Logic
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var userNameInput = $("input#userName").val();
    var toppingsArray = [];
    var toppingsInputs;
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsInputs = $(this).val();
      toppingsArray.push(toppingsInputs);
      $("#toppings").append(toppingsInputs + "<br>");
    })
    var myPizza = new Pizza(sizeInput, toppingsArray);
    myPizza.getPrice();
    $(".orderForm").hide();
    $(".results").show();
    $("#customer").text("Thank you, " + userNameInput + "!");
    $("#pizzaSize").text(myPizza.size);
    $("#receipt").append("$ " + myPizza.price + ".00");

  });
});
