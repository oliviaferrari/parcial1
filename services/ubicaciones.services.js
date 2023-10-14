import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getUbicaciones() {
  await client.connect();
  return db.collection('Ubicacion').find().toArray();
}

async function createUbicacion(ubicacion) {
  await client.connect();
  await db.collection('Ubicacion').insertOne(ubicacion);
  return ubicacion;
}

export {
  getUbicaciones,
  createUbicacion,
};
