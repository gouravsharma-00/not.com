// JavaScript: mongoDB 🍀
import { MongoClient } from 'mongodb';

const URI = process.env.URI;

const client = new MongoClient(URI);

const Fetch = async () => {
    try {
        await client.connect();
        console.log('Connected to mongoDB');

        // Fetching Data
        try {
            const database = client.db('Employee');
            const collection = database.collection('Dev');

            const query = { name: 'Gourav' };
            const result = await collection.findOne(query);
            console.log(`Employee : ${result}`);
        }catch (e) {
            console.log('Query Failed: ', e);
        }

    }catch (e) {
        console.log('Connection Failed: ', e);
    }finally {
        await client.close();
        console.log('Connection Closed');
    }
}

const Insert = async () => {

}

export { Fetch, Insert };