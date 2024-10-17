import express from 'express';

const app = express();

app.get('/', (req, res)=> {
  res.send('Hola Mundo');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
  console.log(`Server is listening on PORT: ${PORT}...`);
});