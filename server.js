// const express = require('express');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express();
// const port = 3000;

// app.use(express.static(__dirname + '/'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const uri = "mongodb+srv://bharatbhatt:bharatbhatt1!@cluster0.0aci8bc.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let collection;

// async function runDB() {
//     try {
//         await client.connect();
//         await client.db("admin").command({ ping: 1 });

//         collection = client.db().collection('Cats');
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } catch (ex) {
//         console.error(ex);
//     }
// }

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/api/cats', (req,res)=>{
//     getAllCats((err,result)=>{
//         console.log(result);
//         if(!err){
//             res.json({statusCode:200,data:result,message:'success'});
//         }
//     });
// });

// app.post('/api/cat', (req,res)=>{
//   let cat = req.body;
//   console.log(cat);
//   insertCat(cat, (err,result) => {
//       if(!err){
//           res.json({statusCode:201,data:result,message:'success'});
//       }
//   });
// });

// function insertCat(cat, callback) {
//     collection.insertOne(cat, callback);
// }

// function getAllCats(callback) {
//     collection.find({}).toArray(callback);
// }

// runDB().catch(console.dir);

// app.listen(port, async () => {
//     console.log(`Server started on port ${port}`);
//     await runDB();
// });

const express = require('express');
require('./dbconnection');
let router = require('./Route/route')

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.use((req, res, next) => {
  req.app.locals.connectToDatabase = connectToDatabase;
  next();
});

app.use('/', catRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
