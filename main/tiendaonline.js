console.log("Hola, bienvenido a la tienda online")
//agregar cartel de bienvenida

const BODY = 3000
const BODY10 = 3500
const ACCESORIOS = 3500
const COSTOENVIO = 500

function compra(productos) {
    switch (productos.trim().toLowerCase()) {
        case "body":
            return BODY;
        case "body10":
            return BODY10;
        case "accesorios":
            return ACCESORIOS;
        default: 
            return 0;

    }
}

// Ingeso de productos seleccionados
alert("Bienvenido, Nuestros productos son: body, Body10, Accesorios")
let productos = prompt("¿Que producto desea comprar?")
let total = 0
let conteo = 0
//revisar porque no aparece el total
//ingreso de màs de un producto 
while ((productos.trim().toLowerCase() !== "finalizar") && (productos.trim() !== "")) {
    total += compra(productos);
    conteo++;
    console.log("El producto #" + conteo + "ingresado es" + productos + " y va un total de: " + total);
    productos = prompt("¿Que producto desea comprar?")
}

//Si se requiere envio
let envio = prompt("El costo del envio a domicilio es $500 ¿Desea agregarlo?")
let direccion
let celular

//Si quiere envio o si No
if (envio.trim().toUpperCase() == "SI") {
    direccion = prompt("Ingrese la direccion de Envio")
    celular = prompt("Ingrese su numero de Celular")
    console.log("El pedido tiene valor total de: " + (total + COSTOENVIO) + "la direccion de envio es: " + direccion + "Su celular para coordinar es " + celular)
    total += COSTOENVIO
    alert("Gracias por tu compra! El total a pagar es: " + total)
} else {
    console.log("El pedido tiene un precio total de: " + total + "Retira en la tienda")
    alert("Gracais por su compra su total es: " + total)
    alert("Podras retirar tu pedido a partir de las 24hs habiles")
}