/*Variables */
let envio = 8000;
let precio = 0;
let opcion = "no";

/*Funciones*/
function costoPedido(producto, cantidad) {
    precio = producto * cantidad;
    return precio;
}

function sumarEnvio(precio) {
    precio += envio;
    return precio
}

/* Inicio */
console.log("Calcula el costo de tu pedido.");
console.log("Código de los productos disponibles: 1 - Taza personalizada $6500. / 2 - Remera personalizada $12500. / 3 - Fotos polaroid $4100.");

do {
    let producto = parseInt(prompt("Código de los productos disponibles: 1 - Taza personalizada $6500. / 2 - Remera personalizada $12500. / 3 - Fotos polaroid $4100."));
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar de ese producto"));

    if (producto !== "" && cantidad !== "" && !(isNaN(producto)) && !(isNaN(cantidad))){
        switch (producto) {
            case 1:
                costoPedido(6500, cantidad);
                break;
            case 2:
                costoPedido(12500, cantidad);
                break;
            case 3:
                costoPedido(4100, cantidad);
                break;
            default:
                console.log("Código del producto incorrecto!");
                alert("Código del producto incorrecto!");
                break;
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
    }

    producto = "";
    cantidad = "";
    precio = 0;
    opcion = prompt("Desea realizar otro calculo? (si/no)")
} while (opcion.toLowerCase() === "si");

console.log("Finalizado!");
alert("Finalizado!");
/* Fin */