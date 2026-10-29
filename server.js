const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Habilitar archivos HTML estáticos
app.use(express.static(path.join(__dirname, "public")));

// Recibir parámetros por GET
app.get("/enviar", (req, res) => {
  const { nombre, apellido, correo, producto, cantidad, tamano, tipoPedido, observaciones } = req.query;
  
  console.log("Datos recibidos:");
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Correo:", correo);
  console.log("Producto:", producto);
  console.log("Cantidad:", cantidad);
  console.log("Tamaño:", tamano);
  console.log("Tipo de pedido:", tipoPedido);
  console.log("Observaciones:", observaciones);

  // Redirigir a la segunda página
  const params = new URLSearchParams({
    nombre: nombre || "",
    apellido: apellido || "",
    correo: correo || "",
    producto: producto || "",
    cantidad: cantidad || "",
    tamano: tamano || "",
    tipoPedido: tipoPedido || "",
    observaciones: observaciones || ""
  });
  res.redirect("/resultado.html?" + params.toString());
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
