const ws = require('ws');

const wss = new ws.Server(
  {
    port: 4000,
  },
  () => console.log('WebSocket server is running on ws://localhost:4000')
);

wss.on('connection', function connection(ws) {
  //   ws.send('Пользователь 1 подключен');
  ws.on('message', function incoming(message) {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message);

        break;
      case 'connection':
        broadcastMessage(message);
        break;

      default:
        break;
    }
  });
});

function broadcastMessage(mes) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(mes));
  });
}
