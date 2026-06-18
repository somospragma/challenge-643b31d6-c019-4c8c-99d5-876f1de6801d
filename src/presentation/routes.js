import express from 'express';
import productoService from '../logica_negocio/productoService';

const router = express.Router();

router.get('/productos', async (req, res) => {
  try {
    const productos = await productoService.obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/productos', async (req, res) => {
  try {
    const nuevoProducto = await productoService.crearProducto(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;