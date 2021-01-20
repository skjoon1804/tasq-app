import { MongoClient } from 'mongodb';

const url = `mongodb://localhost:27017/myorganizer`;
let db = null;

export async function connectDB() {
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParer: true });
    db = client.db();
    console.info("Got DB,", db);
    return db;
}

