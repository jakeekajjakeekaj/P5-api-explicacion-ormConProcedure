import express from 'express';
// Aquí no se usa el 'as' para renombrar ya que se utiliza un export default, si se usara un export "a secas", si se debería de usar el 'as'
import studentsRoutes from './routes/studentsRoutes';

const app = express();

app.get('/', (req, res)=> {
  res.send('Hola Mundo');
});

// De esta manera podemos determinar esta ruta para todo en vez de tener que cambiar de forma manual a todas las rutas dentro de nuestro studentsRoutes
app.use('/estudiantes', studentsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
  console.log(`Server is listening on PORT: ${PORT}...`);
});