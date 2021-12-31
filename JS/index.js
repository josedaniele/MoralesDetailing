//Captura de datos del usuario
function enviar () {
    const select1 = document.getElementById("tipoLavado");
    const select2 = document.getElementById("medioPago");

    
// Devolucion de valores para el tipo de lavado y el medio de pago que elija el usuario 
    function lavado() {
    
        switch  (select1.value){
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
            default : 
                return console.log("numero ingresado invalido");
                break;
            
        }
                    
    }
    function paga(){
        switch(select2.value){
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
        const IVA = x => x*1.21
    //Muestra al usuario su seleccion
    let precioFinal =alert("Su lavado tiene un coste final de $" + IVA(lavado())*paga());
}

class Cliente {
    constructor(nombre , apellido , email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
 
}
function enviando () {
    const inputName = document.getElementById("name");
    const inputLastName = document.getElementById("lastname");
    const inputEmail = document.getElementById("email");

    const capturaDatos = new Cliente (inputName.value, inputLastName.value, inputEmail.value)
    
    const clientes = []
    
    function mostrarDatos(){
        clientes.push(capturaDatos);
        console.log(clientes);
    }
    mostrarDatos()
    
}




