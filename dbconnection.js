const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bharatbhatt:bharatbhatt1!@cluster0.0aci8bc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;