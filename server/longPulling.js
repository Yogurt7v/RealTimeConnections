const express = require('express');
const cors = require('cors');

const PORT = 4000;

const events = require('events');
const emitter = new events.EventEmitter();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/get-messages', (req, res) => {
  emitter.once('new-message', (message) => {
    res.json(message);
  });
});

app.post('/new-message', (req, res) => {
  const message = req.body;
  console.log(message);
  emitter.emit('new-message', message);
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}!!!`);
});
