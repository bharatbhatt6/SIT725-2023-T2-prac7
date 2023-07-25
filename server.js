const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/addTwoNumbers', (req, res) => {
  const number1 = parseInt(req.query.number1);
  const number2 = parseInt(req.query.number2);
  const result = number1 + number2;

  res.json({
    message: 'successful',
    code: 200,
    data: result,
  });
});

app.listen(port, () => {
  console.log('server started');
});
