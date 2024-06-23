import {MongoClient} from 'mongodb';
const uri = process.env.NEXT_PUBLIC_MONGODB
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
 }

async function connectToCluster() {
    let mongoClient;
    try {
        mongoClient = await MongoClient.connect(uri, options);
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}
async function readProjects() {
    let mongoClient;
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('NSCAD_Practicum_site');
        const collection = db.collection('Projects');
        // let queryresult = await collection.find({}).toArray();
        let queryresult = await collection.find({title: 'Pelletier Construction Group'}).toArray();
        return queryresult;
    } finally {
        await mongoClient.close();
    }
}
export default readProjects;