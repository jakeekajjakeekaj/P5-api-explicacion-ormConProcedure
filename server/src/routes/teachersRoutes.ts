// PARA EL CASO DE LOS PROFESORES PRÁCTICAMENTE SE RELIZÓ UN COPY PASTE DE LO QUE YA SE TENÍA CON LOS ALUMNOS

import express from 'express';

const router = express.Router();

// Consulta de todos los estudiantes
router.get('/', (req, res)=> {
  res.json({ msg: "Consulta de profesores" });
});

router.post('/', (req, res)=> {
  res.json({ msg: "Ingreso de profesores" });
});

// Rutas específicas, es decir con un id, para el GET, PUT y DELETE, de esta manera conseguimos en vez de escribir múltiples veces la dirección de /:id, solo basta con escribirla una vez e indicar los métodos http con esta ruta
router.route('/:id')
  .get((req, res)=> {
    res.json({ msg: "Consulta de 1 profesor" });
  })
  .put((req, res)=> {
    res.json({ msg: "Actualizacion de profesor" });
  })
  .delete((req, res)=> {
    res.json({ msg: "Eliminacion de profesor" });
  });

// En vez de manejar todas las rutas desde aquí, lo que se hace es lo siguinete para que en caso de presentar algún cambio en las rutas, no se tengan que actualizar las rutas de forma individual, sino que cambiando una variable se pueda cambiar todo, que básicamente es que cuando un código se repite muchas veces, pues podemos mejorarlo realmente

export default router;