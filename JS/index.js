let entrada = prompt("Escirba el numero en base al lavado que quiera: \n" + "1. Automovil \n" + "2. Camioneta \n" + "3.Motocicleta \n" + "4. Automovil con lavado de interior \n" + "5. Camioneta con lavado de interior \n")
let efectivoTarjeta = prompt("Si va a paga en efetivo escriba E si va a pagar con tarjeta escriba T \n" + "El pago con tarjeta tiene un incremento del 10% sobre el precio del lavado \n" + "Respete el formato mayuscula para las letras")

function lavado() {
    
    switch  (entrada){
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
            return alert("numero ingresado invalido");
            break;
        
    }
                
}
function paga(){
    switch(efectivoTarjeta){
        case "T":
            return 1.1;
            break;
        case "E":
            return 1;
            break;
        default:
            alert("letra ingresada invalida");
            break;
            }

            
    }
    const IVA = x => x*1.21

let precioFinal =alert("Su lavado tiene un coste final de $" + IVA(lavado())*paga());
