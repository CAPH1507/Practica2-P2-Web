const parametros = new URLSearchParams(window.location.search);

// Obtener parámetros
const nombre = parametros.get("nombre");
const apellido = parametros.get("apellido");
const correo = parametros.get("correo");
const producto = parametros.get("producto");
const cantidad = parametros.get("cantidad");
const tamano = parametros.get("tamano");
const tipoPedido = parametros.get("tipoPedido");
const observaciones = parametros.get("observaciones");

// Mostrar información
document.getElementById("nombre").textContent = nombre || "";
document.getElementById("apellido").textContent = apellido || "";
document.getElementById("correo").textContent = correo || "";
document.getElementById("producto").textContent = producto || "";
document.getElementById("cantidad").textContent = cantidad || "";
document.getElementById("tamano").textContent = tamano || "";
document.getElementById("tipoPedido").textContent = tipoPedido || "";
document.getElementById("observaciones").textContent = observaciones || "";
