import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getOrganizadores() {
  await client.connect();
  return db.collection('Organizador').find().toArray();
}

async function createOrganizador(organizador) {
  await client.connect();
  await db.collection('Organizador').insertOne(organizador);
  return organizador;
}

export {
  getOrganizadores,
  createOrganizador,
};
