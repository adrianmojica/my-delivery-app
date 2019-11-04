
var Orders = require('./challenge_data');
const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    let count = 0;
    setInterval(() => {
      count ++;
      console.log(count);
      for (let index = 0; index < Orders.length; index++) {
        const currentOrder = Orders[index];
        if (currentOrder.sent_at_second == count) {
          console.log(currentOrder);
          client.emit('timer', currentOrder);
        }
      }
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);