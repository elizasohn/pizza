function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function (){
  this.toppings.forEach(function(veggie){
    this.price += 1;
  }
  if (this.size === 16){
    this.price += 4;
  }else if (this size === 14){
    this.price += 2;
  }else if (this size === 12){
    this.price += 0;
  }
  return this.price;
});




//User Interface Logic
$(document).ready(function(){
  $("#submitBtn").submit(function(event){
    event.preventDefault;
    let toppingsInputs = $("#toppings:checked");
    let toppingsArray = [];
    let sizeInput = $('#size').val();
    toppingsInputs.forEach(function(toppingInput){
      toppingsArray.push(veg.Input.val());
    });

    let myPizza = new Pizza(sizeInput, toppingsArray);
    let price = myPizza.getPrice();
  })
})
