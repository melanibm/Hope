console.log("Hola, bienvenido a la tienda online")
//agregar cartel de bienvenida

const productos = [
    { id: 1, nombre: "Body", precio: 3000 },
    { id: 2, nombre: "BodyDiseños", precio: 3500 },
    { id: 3, nombre: "Accesorios", precio: 3500 }
];

const COSTOENVIO = 500;

function obtenerPrecioProducto(id) {
    const producto = productos.find(p => p.id === id);
    return producto ? producto.precio : null;
}

// Ingreso de productos seleccionados
alert("Bienvenido, Nuestros productos son:\n1-Body\n2-Body Diseños\n3-Accesorios");
let productosSeleccionados = [];
let conteo = 0;
let total = 0;
let primerProductoIngresado = false; // Variable para rastrear si se ingresó el primer producto

// Ingreso de más de un producto
while (true) {
    const opcion = prompt("¿Qué producto desea comprar? (Ingrese 'finalizar' para terminar)");

    if (opcion.trim().toLowerCase() === "finalizar") {
        break;
    }

    const productoId = parseInt(opcion);
    const precio = obtenerPrecioProducto(productoId);

    if (precio !== null) {
        productosSeleccionados.push({ id: productoId, precio });
        total += precio;
        conteo++;

        if (!primerProductoIngresado) {
            alert(`¡Gracias por seleccionar tu primer producto! El producto #${conteo} ingresado es ${productos.find(p => p.id === productoId).nombre} y va un total de: ${total}`);
            primerProductoIngresado = true; // Cambia el estado a "true" después del primer producto
        } else {
            console.log(`El producto #${conteo} ingresado es ${productos.find(p => p.id === productoId).nombre} y va un total de: ${total}`);
            alert(`Producto #${conteo}: ${productos.find(p => p.id === productoId).nombre}\nTotal acumulado: ${total}`);
        }
    } else {
        alert("Ingrese una opción válida");
    }
}


// Si se requiere envío
const envio = prompt("El costo del envío a domicilio es $500. ¿Desea agregarlo?");
let direccion;
let celular;

if (envio.trim().toLowerCase() === "si") {
    direccion = prompt("Ingrese la dirección de envío");
    celular = prompt("Ingrese su número de celular");
    total += COSTOENVIO;
    console.log(`El pedido tiene valor total de: ${total}. La dirección de envío es: ${direccion}. Su celular para coordinar es ${celular}`);
    alert(`Gracias por tu compra! El total a pagar es: ${total}`);
} else {
    console.log(`El pedido tiene un precio total de: ${total}. Retira en la tienda`);
    alert(`Gracias por su compra, su total es: ${total}. Podrá retirar su pedido a partir de las 24hs hábiles.`);
}
