class Cliente {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const clientes = [];
//Captura de datos del usuario

function enviar() {
  const select1 = document.getElementById("tipoLavado");
  const select2 = document.getElementById("medioPago");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");

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
      case "6":
        return 5000;
        break;
      case "7":
        return 7000;
        break;
      case "8":
        return 10000;
        break;
      case "9":
        return 3500;
        break;
      case "10":
        return 12000;
        break;
      case "11":
        return 14000;
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

  let capturarDatos = new Cliente(inputEmail.value, inputPassword.value);

  clientes.push(capturarDatos);
  const email = inputEmail.value;
  const password = inputPassword;
  //guardar usuario en la base datos
  const guardarUsuario = (email, password) => {
    localStorage.setItem(email, password);
  };
  guardarUsuario("usuario", JSON.stringify(clientes));
  //aviso al usuario de que su solicitud de turno fue aceptada
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML =
    "<h2>Bienvenido " +
    " " +
    "</h2>" +
    "<span> Su lavado tiene un coste final de $" +
    IVA(lavado()) * paga() +
    ". En breve le mandaremos el turno al email : <br> " +
    email +
    "</span>";
  saludo.appendChild(card);
}

const saludo = document.getElementById("saludo");
