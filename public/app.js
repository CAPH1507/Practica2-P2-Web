function solicitarPedido() {
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var producto = document.getElementById("producto").value;
    var cantidad = document.getElementById("cantidad").value;
    var paraLlevar = document.getElementById("paraLlevar").checked;
    var observaciones = document.getElementById("observaciones").value;
    var tamano = "";

    if (document.getElementsByName("tamano")[0].checked == true) {
        tamano = "Chico";
    }
    if (document.getElementsByName("tamano")[1].checked == true) {
        tamano = "Mediano";
    }
    if (document.getElementsByName("tamano")[2].checked == true) {
        tamano = "Grande";
    }

    nombre = nombre.trim();
    apellido = apellido.trim();
    correo = correo.trim();

    if (nombre == "" || apellido == "") {
        alert("Escribe tu nombre y apellido");
        return;
    }
    if (correo == "" || document.getElementById("correo").checkValidity() == false) {
        alert("Escribe un correo válido");
        return;
    }
    if (producto == "") {
        alert("Selecciona un producto");
        return;
    }
    if (tamano == "") {
        alert("Selecciona un tamaño");
        return;
    }
    if (cantidad == "") {
        alert("Selecciona una cantidad");
        return;
    }

    var tipoPedido = "Para consumir en el local";
    if (paraLlevar == true) {
        tipoPedido = "Para llevar";
    }

    
    params = new URLSearchParams({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        producto: producto,
        cantidad: cantidad,
        tamano: tamano,
        tipoPedido: tipoPedido,
        observaciones: observaciones
    });
    console.log("Datos enviados:" + params.toString());
    window.location.href =`http://localhost:3000/enviar?${params.toString()}`; 

    // Mostrar el resumen como texto para que no se interprete como código HTML.
    var resumen = document.createElement("p");
    resumen.textContent = 
        "Cliente:       " + nombre + " " + apellido +
        "Correo:        " + correo +
        "Producto:      " + producto +
        "Cantidad:      " + cantidad +
        "Tamaño:        " + tamano +
        "Tipo:          " + tipoPedido +
        "Observaciones: " + observaciones;
    document.getElementById("resultado").appendChild(resumen);

}

// Limpiar formulario 
function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}
