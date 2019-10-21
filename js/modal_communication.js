var communication_link = document.querySelector(".write_us");
var modal_communication = document.querySelector(".modal_communication");
var communication_close = modal_communication.querySelector(".modal_close");
var name_field = modal_communication.querySelector("[name=name]");
var email_field = modal_communication.querySelector("[name=email]");
var letter_field = modal_communication.querySelector("[name=letter]");
var form = modal_communication.querySelector("form");
var storage_support = true;
var storage_name
var storage_email

try {
  storage_name = localStorage.getItem("name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  storage_support = false;
}

communication_link.addEventListener("click", function (evt){
  evt.preventDefault();
  modal_communication.classList.add("modal_shown");
  if ( storage_name && storage_email ) {
    name_field.value = storage_name;
    email_field.value = storage_email;
    letter_field.focus();
  } else {
    name_field.focus();
  }
});

communication_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_communication.classList.remove("modal_shown");
  modal_communication.classList.remove("modal_eror");
});

form.addEventListener("submit", function(evt){
  if ( !name_field.value || !email_field.value || !letter_field.value ) {
    evt.preventDefault();
    modal_communication.classList.remove("modal_eror");
    modal_communication.offsetWidth = modal_communication.offsetWidth;
    modal_communication.classList.add("modal_eror");
  } else {
    if (storage_support) {
      localStorage.setItem("name", name_field.value);
      localStorage.setItem("email", email_field.value);
    }
  }
});
