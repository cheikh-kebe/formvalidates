const firstname = document.getElementById("firstname");
const lastname = document.getElementById("firstname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation")
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const emailValidate = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
);

form.addEventListener('submit', (e) => {
  let messages = [];
  if (firstname.value === "" || firstname.value == null) {
    messages.push("first name required");
  }
  if (lastname.value === "" || lastname.value == null) {
    messages.push("last name required");
  }

  
  if (!email.value.match(emailValidate)) {
    messages.push('invalid password')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value != confirmation.value) {
    messages.push('Password not identical')
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
