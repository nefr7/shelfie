require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller')
const app = express()
const {CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db)
  console.log('db connected')
}).catch(err => console.log(err));

app.use(express.json());
app.post('/api/products', ctrl.create);
app.delete('/api/products/:id', ctrl.delete);
app.put('/api/products/:id', ctrl.update);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});