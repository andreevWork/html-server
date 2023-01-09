const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('http req...');

  res.send('Hello World NEW!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});