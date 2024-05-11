/*Variables */
let envio = 8000;
let precio = 0;
let opcion = "no";
let cantidad = 0;

/*Funciones*/
function costoPedido(producto, cantidad) {
    return producto * cantidad;
}

function sumarEnvio(precio) {
    let precioConEnvio = precio + envio;
    return precioConEnvio;
}

/* Inicio */
console.log("Calcula el costo de tu pedido.");
console.log("Código de los productos disponibles: \n1 - Taza personalizada $6500.\n2 - Remera personalizada $12500.\n3 - Fotos polaroid $4100.");

do {
    let producto = parseInt(prompt("Código de los productos disponibles: \n1 - Taza personalizada $6500.\n2 - Remera personalizada $12500.\n3 - Fotos polaroid $4100."));
    

    if (!isNaN(producto)){
        switch (producto) {
            case 1:
cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar de ese producto"))
if (!isNaN(cantidad)){
precio = costoPedido(6500, cantidad);
}
   break;
                
            case 2:
cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar de ese producto"))
if (!isNaN(cantidad)){
precio = costoPedido(12500, cantidad);
}
   break;
            case 3:
cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar de ese producto"))
if (!isNaN(cantidad)){
precio = costoPedido(4100, cantidad);
}
   break;
            default:
                console.log("Código del producto incorrecto!");
                alert("Código del producto incorrecto!");
                continue;
        }

        opcion = prompt("¿Es con envío? (si/no) Costo extra: $8000");
        if (opcion.toLowerCase() === "si") {
            precio = sumarEnvio(precio);
        }

        console.log("El costo total de su pedido es de: $" + precio);
        alert("El costo total de su pedido es de: $" + precio);

    }else{
        console.log("Código o cantidad incorrecta!");
        alert("Código o cantidad incorrecta!");
        continue;
    }

    producto = 0;
    cantidad = 0;
    precio = 0;

    opcion = prompt("Desea realizar otro calculo? (si/no)")
} while (opcion.toLowerCase() === "si");

console.log("Finalizado!");
alert("Finalizado!");
/* Fin */