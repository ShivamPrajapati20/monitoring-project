const express = require('express');
const client = require('prom-client');

const app = express();

//default metrics
client.collectDefaultMetrics();

//request counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of requests',
});

//Middleware
app.use((req, res, next) => {
  httpRequestCounter.inc();
  next();
});

//Home
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});