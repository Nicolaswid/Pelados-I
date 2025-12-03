import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";
import fs from "fs";

// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores = JSON.parse(fs.readFileSync("data/sabores.json"));
let productos = JSON.parse(fs.readFileSync("data/productos.json"));

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

let infoPedido = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"))
infoPedido.push(cliente);
infoPedido.push(producto);
infoPedido.push(saboresElegidos);
let nuevoJson = JSON.stringify(setDefaultOptions, null, 2);

fs.writeFileSync("data/pedidos.json", nuevoJson);

// Guardar pedido
// COMPLETEN USTEDES
