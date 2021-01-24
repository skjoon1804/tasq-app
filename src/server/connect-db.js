import { MongoClient } from 'mongodb';

let url = (process.env.NODE_ENV === `production`) 
            ? `mongodb+srv://admin:admin@cluster0.mylms.mongodb.net/db?retryWrites=true&w=majority`
            : `mongodb://localhost:27017/myorganizer`;            
let db = null;

export async function connectDB() {
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParer: true });
    db = client.db();
    console.info("Got DB,", db);
    return db;
}
connectDB();
