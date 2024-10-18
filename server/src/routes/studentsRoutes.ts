import express from 'express';

const router = express.Router();

// Consulta de todos los estudiantes
router.get('/', (req, res)=> {
  res.json({ msg: "Consulta de estudiantes" });
});

// Consulta de solo un estudiante
router.get('/:id', (req, res)=> {
  res.json({ msg: "Consulta de 1 estudiante" });
});

router.post('/', (req, res)=> {
  res.json({ msg: "Ingreso de estudiantes" });
});

router.put('/:id', (req, res)=> {
  res.json({ msg: "Actualizacion de estudiantes" });
});

router.delete('/:id', (req, res)=> {
  res.json({ msg: "Eliminacion de estudiantes" });
});

// En vez de manejar todas las rutas desde aquí, lo que se hace es lo siguinete para que en caso de presentar algún cambio en las rutas, no se tengan que actualizar las rutas de forma individual, sino que cambiando una variable se pueda cambiar todo, que básicamente es que cuando un código se repite muchas veces, pues podemos mejorarlo realmente

export default router;