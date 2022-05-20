const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //pegando os valores inseridos pelo usuário dentro dos input's.
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmValue = passwordConfirm.value;

  //usermane validation
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  //email validation
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "O email não é válido.");
  } else {
    setSuccessFor(email);
  }

  //password validation

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Sua senha deve conter no mínimo 6 caracteres.");
  } else {
    setSuccessFor(password);
  }

  //passwordConfirm validation

  if (passwordConfirmValue === "") {
    setErrorFor(passwordConfirm, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmValue !== passwordValue) {
    setErrorFor(passwordConfirm, "As senhas não correspondem.");
  } else {
    setSuccessFor(passwordConfirm);
  }
}

//função para a mensagem de erro.
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add mensagem de erro.
  small.innerText = message;

  //add classe error.
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
