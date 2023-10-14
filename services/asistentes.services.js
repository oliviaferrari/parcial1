import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getAsistentes() {
  await client.connect();
  return db.collection('Asistente').find().toArray();
}

async function createAsistente(asistente) {
  await client.connect();
  await db.collection('Asistente').insertOne(asistente);
  return asistente;
}

export {
  getAsistentes,
  createAsistente,
};
