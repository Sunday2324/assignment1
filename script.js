const form = document.getElementById("signupform");

form.addEventListener("submit", function (e) {
 e.preventDefault();

  validateField("firstName");
  validateField("lastName");
  validateEmail("email");
  validateField("password");

  const errorElements = document.querySelectorAll(".error");

  if (errorElements.length === 0) {
    alert("Form submitted successfully 🎉 Welcome!");
    form.reset();
  }

});

function validateField(id) {
  const input = document.getElementById(id);
  const parent = input.parentElement;

  if (input.value.trim() === "") {
    parent.classList.add("error");
  } else {
    parent.classList.remove("error");
  }
}

function validateEmail(id) {
  const input = document.getElementById(id);
  const parent = input.parentElement;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!pattern.test(input.value.trim())) {
    parent.classList.add("error");
  } else {
    parent.classList.remove("error");
  }
}

const inputs = document.querySelectorAll("#signupform input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (input.id === "email") {
      validateEmail(input.id);
    } else {
      validateField(input.id);
    }
  });
});
