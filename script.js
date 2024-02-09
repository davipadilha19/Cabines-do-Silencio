function validarFormulario() {
  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  senha = document.getElementById("password").value;
  senhaConfirma = document.getElementById("passwordConfirm").value;

  if (nome == " " || email == " " || senha == " " || senhaConfirma == " ") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  if (senha != senhaConfirma) {
    alert("As senhas não correspondem. Por favor, verifique.");
    return false;
  }

  return true;
}
