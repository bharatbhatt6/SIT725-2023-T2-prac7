let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbconnection');
let router = require('./Route/route');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);



app.listen(port, async () => {
    console.log(`Server started on port ${port}`);
});