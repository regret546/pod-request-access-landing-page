const emailInput = document.querySelector("#email");
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateInputs();
});

const setError = function (element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add(".error");
  inputControl.classList.remove("success");
};

const setSuccess = function (element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = function () {
  const emailInputValue = emailInput.value.trim();

  if (emailInputValue === "") {
    setError(emailInput, "Email must be not empty");
  } else {
    setSuccess(emailInput);
  }
};
