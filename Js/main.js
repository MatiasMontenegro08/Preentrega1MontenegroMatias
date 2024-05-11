/*Variables */
let envio = 8000;
let precio = 0;
let opcion = "no";
let cantidad = 0;

/*Funciones*/
function costoPedido(costo, cantidad) {
    return costo * cantidad;
}

function sumarEnvio(precio) {
    let precioConEnvio = precio + envio;
    return precioConEnvio;
}

function preguntaCantidad(costo){
    cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar de ese producto"))
                if (!isNaN(cantidad)) {
                    precio = costoPedido(costo, cantidad);
                    return precio;
                }else{
                    console.log("Error! Debe ingresar un número!");
                    alert("Error! Debe ingresar un número!");
                }
}
function preguntaEnvio(){
    opcion = prompt("¿Es con envío? (si/no) Costo extra: $8000");
    if (opcion.toLowerCase() === "si") {
        precio = sumarEnvio(precio);
    }
}

function imprimirCosto(){
    console.log("El costo total de su pedido es de: $" + precio);
    alert("El costo total de su pedido es de: $" + precio);
}

/* Inicio */
console.log("Calcula el costo de tu pedido.");
console.log("Código de los productos disponibles: \n1 - Taza personalizada $6500.\n2 - Remera personalizada $12500.\n3 - Fotos polaroid $4100.");

do {
    let producto = parseInt(prompt("Código de los productos disponibles: \n1 - Taza personalizada $6500.\n2 - Remera personalizada $12500.\n3 - Fotos polaroid $4100."));


    if (!isNaN(producto)) {
        switch (producto) {
            case 1:
                if(preguntaCantidad(6500)){
                    preguntaEnvio();
                    imprimirCosto();
                }
                break;

            case 2:
                if (preguntaCantidad(12500)) {
                    preguntaEnvio();
                    imprimirCosto();
                }
                break;
            case 3:
                if (preguntaCantidad(4100)) {
                    preguntaEnvio();
                    imprimirCosto();
                }
                break;
            default:
                console.log("Código del producto incorrecto!");
                alert("Código del producto incorrecto!");
                break;
        }

    } else {
        console.log("Código incorrecto!");
        alert("Código incorrecto!");
    }

    producto = 0;
    cantidad = 0;
    precio = 0;

    opcion = prompt("Desea realizar otro calculo? (si/no)")
} while (opcion.toLowerCase() === "si");

console.log("Finalizado!");
alert("Finalizado!");
/* Fin */