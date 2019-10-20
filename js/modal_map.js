var map_link = document.querySelector(".map_link");
var modal_map = document.querySelector(".modal_map");
var map_close = modal_map.querySelector(".modal_close")

map_link.addEventListener("click", function (evt){
  evt.preventDefault();
  modal_map.classList.add("modal_shown")
});

map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal_shown")
});
