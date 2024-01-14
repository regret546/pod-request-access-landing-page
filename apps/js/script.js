const form = document.querySelector("#form");
const inputVerification = document.querySelector("#inputVerification");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailInput = document.querySelector("#email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailInput.value === "") {
    inputVerification.classList.add("inputError");
    inputVerification.innerText = "Oops! Please add your email";
    emailInput.value = "";
  } else if (!emailInput.value.match(emailRegex)) {
    inputVerification.classList.add("inputError");
    inputVerification.innerText = "Oops! Please check your email";
    emailInput.value = "";
  } else {
    inputVerification.classList.remove("inputError");
    inputVerification.innerText = "";
    emailInput.value = "";
    alert(`Email ${emailInput.value} Submitted`);
  }
});
