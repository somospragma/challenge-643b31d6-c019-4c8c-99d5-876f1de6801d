import productoRepository from '../acceso_datos/productoRepository';

async function obtenerProductos() {
  return await productoRepository.obtenerProductos();
}

async function crearProducto(producto) {
  return await productoRepository.crearProducto(producto);
}

export { obtenerProductos, crearProducto };