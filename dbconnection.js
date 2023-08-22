const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://bharatbhatt:bharatbhatt1!@cluster0.0aci8bc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//     return client.db();
//   } catch (ex) {
//     console.error("Error connecting to MongoDB:", ex);
//     throw ex;
//   }
// }
client.connect();
module.exports = client;
