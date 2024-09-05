const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Bir olay dinleyicisi ekleme
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Olayı tetikleme
eventEmitter.emit('greet', 'Onur');  // Merhaba, Onur! çıktısını verir
