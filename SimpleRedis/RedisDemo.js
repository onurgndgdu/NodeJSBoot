const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

client.on('connect', () => {
    console.log('Redis connection successfully.');
});

client.on('error', (err) => {
    console.log('Error connection Redis:', err);
});

client.set('user:ad', 'Onur', (err, reply) => {
    if (err) console.error('Error set:', err);
    console.log('Result:', reply);
});

client.get('user:ad', (err, reply) => {
    if (err) console.error('Error get:', err);
    console.log('Result:', reply);
});

client.quit();

