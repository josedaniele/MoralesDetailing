const URLPOST = "https://jsonplaceholder.typicode.com/users";
// constructor del usuario
class Usuario {
  constructor(
    email,
    contrasena,
    direccion,
    pisoApartamento,
    ciudad,
    provincia
  ) {
    this.email = email;
    this.contrasena = contrasena;
    this.direccion = direccion;
    this.pisoApartamento = pisoApartamento;
    this.ciudad = ciudad;
    this.provincia = provincia;
  }
}
//array para usuarios
const usuarios = [];
// captura de datos que el usuario envio
function enviar() {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputAddress = document.getElementById("address");
  const inputFloor = document.getElementById("floor");
  const inputCity = document.getElementById("city");
  const inputState = document.getElementById("state");

  let capturarDatos = new Usuario(
    inputEmail.value,
    inputPassword.value,
    inputAddress.value,
    inputFloor.value,
    inputCity.value,
    inputState.value
  );
  //enviar al array los datos capturados
  usuarios.push(capturarDatos);

  //guardar usuario en el storage
  const guardarUsuario = (
    email,
    contrasena,
    direccion,
    pisoApartamento,
    ciudad,
    provincia
  ) => {
    localStorage.setItem(
      email,
      contrasena,
      direccion,
      pisoApartamento,
      ciudad,
      provincia
    );
  };
  guardarUsuario("usuario", JSON.stringify(usuarios));
  //enviar al json los datos
  $.ajax({
    type: "POST",
    url: URLPOST,
    data: usuarios,
    success: function (response) {
      console.log("exito");
      const card = document.createElement("li");
      card.classList.add("card");
      card.innerHTML =
        "<h3>Bienvenido a Morales Detailing</h3>" +
        "<span>Gracias por elegirnos!<span>";
      saludo.appendChild(card)
      },
    error: function (err) {
      console.log("error");
    },
    complete: function () {
      console.log("completo");
    },
  });
}
const saludo = document.getElementById("saludo");
