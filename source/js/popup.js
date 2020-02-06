var form = document.querySelector("form");
var firstname = form.querySelector("[name=firstname]");
var lastname = form.querySelector("[name=lastname]");
var email = form.querySelector("[name=email]");
var popupsent = document.querySelector(".modal--sent");
var popupfailure = document.querySelector(".modal--failure");
var closesent = popupsent.querySelector(".button--modal-sent");
var closefailure = popupfailure.querySelector(".button--modal-failure");
var requiredlastname = form.querySelector("#lastname")
var requiredfirstname = form.querySelector("#firstname")
var requiredemail = form.querySelector("#email")

form.addEventListener("submit", function (evt) {
  if (firstname.value && lastname.value && email.value) {
    evt.preventDefault();
    popupsent.classList.add("modal--sent-show");
    requiredlastname.classList.remove("form-input__input--red");
    requiredfirstname.classList.remove("form-input__input--red");
    requiredemail.classList.remove("form-input__input--red");
  } else {
      evt.preventDefault();
      popupfailure.classList.add("modal--failure-show");
      if (!lastname.value) {
        evt.preventDefault();
        requiredlastname.classList.add("form-input__input--red");
      } else {
          requiredlastname.classList.remove("form-input__input--red");
        }
      if (!firstname.value) {
        evt.preventDefault();
        requiredfirstname.classList.add("form-input__input--red");
      } else{
          requiredfirstname.classList.remove("form-input__input--red");
        }
      if (!email.value) {
        evt.preventDefault();
        requiredemail.classList.add("form-input__input--red");
      } else{
          requiredemail.classList.remove("form-input__input--red");
        }
    }
});

closesent.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupsent.classList.remove("modal--sent-show");
});

closefailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfailure.classList.remove("modal--failure-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupsent.classList.contains("modal--sent-show")) {
      popupsent.classList.remove("modal--sent-show");
    }
    if (popupfailure.classList.contains("modal--failure-show")) {
      popupfailure.classList.remove("modal--failure-show");
    }
  }
});
