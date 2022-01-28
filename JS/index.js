

//aplicacion de JQUERY a partir de la linea 97

class Cliente {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}
//array de clientes
const clientes = [];
//Captura de datos del usuario

function enviar() {
  const select1 = document.getElementById("tipoLavado");
  const select2 = document.getElementById("medioPago");
  const inputName = document.getElementById("name");
  const inputLastName = document.getElementById("lastname");
  const inputEmail = document.getElementById("email");

  // Devolucion de valores para el tipo de lavado,medio de pago y datos del usuario
  function lavado() {
    switch (select1.value) {
      case "1":
        return 700;
        break;
      case "2":
        return 1000;
        break;
      case "3":
        return 400;
        break;
      case "4":
        return 1000;
      case "5":
        return 1300;
        break;
      default:
        return console.log("numero ingresado invalido");
        break;
    }
  }
  function paga() {
    switch (select2.value) {
      case "T":
        return 1.1;
        break;
      case "E":
        return 1;
        break;
      default:
        console.log("letra ingresada invalida");
        break;
    }
  }
  const IVA = (x) => x * 1.21;

    let capturarDatos = new Cliente(
    inputName.value,
    inputLastName.value,
    inputEmail.value
  );

  clientes.push(capturarDatos);

  ;

  const name = inputName.value;
  const lastName = inputLastName.value;
  const email = inputEmail.value;

  const guardarUsuario = (nombre, apellido, email) => {localStorage.setItem(nombre, apellido, email)};
 guardarUsuario("usuario", JSON.stringify(clientes));

  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML =
    "<h2>Bienvenido " +
    name +
    " " +
    lastName +
    "</h2>" +
    "<span> Su lavado tiene un coste final de $" +
    IVA(lavado()) * paga() +
    ". En breve le mandaremos el turno al email : <br> " +
    email +
    "</span>";
  saludo.appendChild(card);
}



const saludo = document.getElementById("saludo");

//Jquery

$(function(){
  $("#ligthMode").click(function(){
    $("body").css({"background-color": "white"});
    $("h1").css({"color": "black"});
    $("#piePagina").css({"color": "black"});
    $("p").css({"color": "black"});
    $(".logos").css({"filter":"hue-rotate(0deg) brightness(0%)"})
  })
})
