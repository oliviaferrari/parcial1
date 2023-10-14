import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1'); // Asegúrate de que la base de datos sea la correcta para tus eventos.

async function getEventos() {
    await client.connect();
    return db.collection('Evento').find().toArray();
}

async function createEvento(evento) {
    await client.connect();
    await db.collection('Evento').insertOne(evento);
    return evento;
}

async function getEventosByOrganizador(organizadorId) {
    await client.connect();
    return db.collection('Evento').find({ organizador: new ObjectId(organizadorId) }).toArray();
}

export {
    getEventos,
    createEvento,
    getEventosByOrganizador
};


