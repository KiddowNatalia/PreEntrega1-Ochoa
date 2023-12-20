/* Quiero que al elegir cuatro productos me diga el total de mi compra, si es que 
me alcanza el dinero que tengo nocierto */

function Productos(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const frutaUno = new Productos("Frutillas", 2000);
const frutaDos = new Productos("Arandanos", 1000);
const frutaTres = new Productos("Maracuya", 5000);

const frutasCompradas = [];

let compraCliente;
let resultado = 0;
let total = 0;
let seguirComprando;
let frutas = "";

let tuDinero = Number(prompt("Ingrese su dinero para comprar"));

do {
  do {
    compraCliente = Number(
      prompt(
        `Cual fruta quieres comprar? Elegi el numero de la fruta que quieras. \n\n Tu dinero es: ${tuDinero} \n\n 1. ${frutaUno.nombre} a ${frutaUno.precio}  \n 2. ${frutaDos.nombre} a ${frutaDos.precio} \n 3. ${frutaTres.nombre} a ${frutaTres.precio} `
      )
    );
  } while (compraCliente < 0 || compraCliente > 3);

  function suma(frutaElegida) {
    if (tuDinero >= frutaElegida.precio) {
      resultado = frutaElegida.precio + resultado;
      tuDinero = tuDinero - frutaElegida.precio;
      alert("Te quedan " + tuDinero);
      frutasCompradas.push(frutaElegida);
    } else {
      alert(
        "No tienes dinero suficiente para comprar esa fruta. Prueba otra o finaliza la compra"
      );
    }

    return resultado;
  }

  switch (compraCliente) {
    case 1:
      total = suma(frutaUno);
      break;
    case 2:
      total = suma(frutaDos);
      break;
    case 3:
      total = suma(frutaTres);
      break;
    default:
      break;
  }

  if (tuDinero === 0) {
    seguirComprando = 2;
  } else {
    seguirComprando = Number(
      prompt(
        `Quieres seguir comprando? Elegi el numero de la opción que quieras. \n 1. Si \n 2. No`
      )
    );
  }
} while (seguirComprando === 1);

for (let index = 0; index < frutasCompradas.length; index++) {
  frutas = frutasCompradas[index].nombre + ", " + frutas;
}
alert(`Has comprado las frutas: ${frutas} \n El total fue: ${total}`);
