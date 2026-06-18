import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
config();

const url = process.env.DB_URL;
const dbName = 'productosDB';

async function obtenerProductos() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(dbName);
    const productos = await db.collection('productos').find().toArray();
    return productos;
  } finally {
    await client.close();
  }
}

async function crearProducto(producto) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('productos').insertOne(producto);
    return result.ops[0];
  } finally {
    await client.close();
  }
}

export { obtenerProductos, crearProducto };