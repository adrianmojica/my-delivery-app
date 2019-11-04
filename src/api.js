import openSocket from 'socket.io-client';


const  socket = openSocket('http://localhost:8000');
function subscribeToTimer(cb) {
  
  socket.on('timer', Order => cb(null, Order));
  socket.emit('subscribeToTimer', 1000);
  
  
}

export { subscribeToTimer };