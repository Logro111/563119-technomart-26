var buy_link = document.querySelectorAll(".buy_btn");
var modal_success_buy = document.querySelector(".modal_success_buy");
var success_close = modal_success_buy.querySelector(".modal_close");
var success_buttons = modal_success_buy.querySelectorAll(".button")

Array.prototype.forEach.call(buy_link, function(elem){
  elem.addEventListener("click", function (evt){
    evt.preventDefault();
    modal_success_buy.classList.add("modal_shown")
  });
})

success_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_success_buy.classList.remove("modal_shown")
});

Array.prototype.forEach.call(success_buttons, function(elem){
  elem.addEventListener("click", function (){
    modal_success_buy.classList.remove("modal_shown")
  });
});
