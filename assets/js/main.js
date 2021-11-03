// JS stuff
const form = document.forms[0];
const name = form["name"];
const address = form["address"];
const errorInputName = "El campo nombre no puede estar vacio";
const errorInputAddress = "El campo Lugar de nacimiento no puede estar vacio";

form.addEventListener("submit", eventHandler, true);

function eventHandler(event) {
  event.preventDefault();
  if (event.type === "submit") {
    checkInputs();
  }
}

function checkInputs() {
  const inputName = name.value.length;
  const inputAddress = address.value.length;

  if (inputName < 1) {
    errorDisplayer(errorInputName);
  } else {
    console.log(name.value);
  }
  if (inputAddress < 1) {
    errorDisplayer(errorInputAddress);
  } else {
    console.log(address.value);
  }

  if (inputAddress > 1 && inputName > 1) {
    name.value = "";
    address.value = "";
  }
}

function errorDisplayer(error) {
  alert(error);
}
