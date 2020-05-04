import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: `hello maaans!` });
});

app.listen(3333);
