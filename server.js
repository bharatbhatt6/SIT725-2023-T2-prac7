// const express = require('express');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express();
// const port = process.env.PORT || 3000;


// app.use(express.static(__dirname + '/'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// let collection;
// const uri = "mongodb+srv://bharatbhatt:bharatbhatt1!@cluster0.0aci8bc.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// async function run() {
//   try {
//     await client.connect();
//     collection = client.db().collection('Cats');
//     console.log(collection);
//   } catch(ex) {
//     console.error(ex);
//   }
// }

// app.post('/api/cat', function(req,res){
//   // ask DB to post this CAT
//   let cat = req.body;
//   insertCat(cat, (err,result) => {
//       if (!err) {
//           res.json({statusCode:201,data:result,message:'success'});
//       }
//   });
// });

// function insertCat(cat, callback) {
//   collection.insertOne(cat,callback);
// }

// app.get('/api/cats', (req,res)=>{
//   getAllCats((err,result)=>{
//       if (!err) {
//           res.json({statusCode:200,data:result,message:'success'});
//       }
//   });
// });

// function getAllCats(callback) {
//   collection.find({}).toArray(callback);
// }


// app.listen(port, () => {
//   console.log('server started');
//   run().catch(console.dir);
// });








// const express = require('express');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// let collection;
// const uri = "mongodb+srv://bharatbhatt:bharatbhatt1!@cluster0.0aci8bc.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// async function run() {
//   try {
//     await client.connect();
//     collection = client.db().collection('Cats');
//     console.log("Connected to database");
//   } catch(ex) {
//     console.error("Error connecting to database:", ex);
//   }
// }

// app.get('/api/cats', async (req, res) => {
//   try {
//     const cats = await getAllCats();
//     res.json({ statusCode: 200, data: cats, message: 'success' });
//   } catch (err) {
//     console.error("Error fetching cats:", err);
//     res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
//   }
// });

// async function getAllCats() {
//   return collection.find({}).toArray();
// }

// app.listen(port, () => {
//   console.log('Server started');
//   run().catch(console.dir);
// });


const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let collection;
const uri = "mongodb+srv://bharatbhatt:bharatbhatt1!@cluster0.0aci8bc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

async function run() {
  try {
    await client.connect();
    collection = client.db().collection('Cats');
    console.log("Connected to database");
  } catch(ex) {
    console.error("Error connecting to database:", ex);
  }
}


app.post('/api/cat', function (req, res) {
  let cat = req.body;
  insertCat(cat, (err, result) => {
      if (!err) {
          res.json({ statusCode: 201, data: result, message: 'success' });
      }
  });
});

app.get('/api/cats', (req, res) => {
  getAllCats((err, result) => {
      if (!err) {
          res.json({ statusCode: 200, data: result, message: 'success' });
      }
  });
});

function insertCat(cat, callback) {
  collection.insertOne(cat, callback);
}

function getAllCats(callback) {
  collection.find({}).toArray(callback);
}



app.listen(port, () => {
  console.log('Server started');
  run().catch(console.dir);
});