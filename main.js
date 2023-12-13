/* Quiero que al elegir cuertos productos me diga el total de mi compra, si es que 
me alcanza el dinero que tengo nocierto */

let productos = "frutillas, arandanos y maracuya";
let tuDinero = 7000;

function suma(productoUno, productoDos, productoTres){
    if(tuDinero >= 7000){
        switch(productos){
            case "frutillas, arandanos y maracuya":
            return  productoUno + productoDos + productoTres;
    
            case "frutilla":
            return  productoUno;
    
            case "arandano":
            return  productoDos;
    
            case "naranja":
            return  productoTres;
    
            default:
                return "Usted no ha seleccionado productos"; 
            }
    }
    else{
        return "No tienes saldo suficiente"
    }
    
}
let resultado = suma(1000, 2000, 4000);


console.log(suma() || (`Elegiste los productos: ${productos}. El total de tu compra es de $${resultado}`));

/* console.log(`Elegiste los productos: ${productos}. El total de tu compra es de $${resultado}`); */

