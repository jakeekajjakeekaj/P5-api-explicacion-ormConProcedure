// Aquí únicamente realizaremos una pequeña práctica para un correcto estructurado y formación del back con las API, utilizando TS para seguirlo practicando

// Hacemos nuestro npm init dentro de la carpeta server

// Instalamos express, cors

// instalamos nodemon -D para las dev dependencies

// instalamos npm i --save-dev @types/express @types/node @types/cors

// instalamos npm install ts-node typescript --save-dev

// Para crear un tsc escribimos npx tsc --init, de esta manera crearemos un tsconfig.json; y dentro del mismo escribiremos este código: 
// {
//   "compilerOptions": {
//     "target": "es6",
//     "module": "commonjs",
//     "strict": true,
//     "esModuleInterop": true,
//     "skipLibCheck": true,
//     "forceConsistentCasingInFileNames": true,
//     "outDir": "./dist"
//   }
// }

// *** DATO MUY IMPORTANTE: Es importante considerar usar ORM, si bien al manejar nuestras consultas SQL con ?, nos puede ayudar bastante, ya que al no manejar algo como ${name} directo en la consulta SQL podemos evitar inyecciones SQL, por ejemplo que no escriban algo como Pepe)' DROP TABLE users; -- de esta manera esta inyección ya no funcionaría porque se estaría tratando como un dato que se meterá en ? y no se ejecutará de forma directa; el único problema es que al usar ORM podemos facilitar mucho el evitar las inyecciones, escribir SQL directo y tratar todo más como datos, podemos colocar condiciones de mejor manera antes de que los datos sean insertados en nuestra DB por ejemplo.
// EL ORM RECOMENDADO SERÍA TYPEORM que tiene mejor soporte para TS, o por otro lado si se quiere una opción más robusta y "cotidiana" está Sequilize, sin embargo se recomienda más TYPEORM, así mismo MONGOOSE por ejemplo también vendría siendo lo que es un ORM, solo que ahora se llamaría ODM que básicamente indica que el ORM es más para SQL y el ODM es más para noSQL

// *** EJEMPLO IMPORTANTE EXTRA ***
// NOSOTROS AL TRABAJAR CON ALGÚN ORM, también podemos trabajar con PROCEDURES, en este caso a pesar de no ser lo más recomedable, si es posible, a continuación se verá una manera de poder manejar un híbrido en caso de sí necesitar PROCEDURES dentro de nuestro código:
// Para empezar, dentro de nuestra DB creada, es decir después de utilizar el USE, escribimos:
// Esto cambia el fin de ejecución de la consulta, de ; a //, es necesario porque el usar el BEGIN, cuando escribamos ; la consulta parará, lo que no queremos que pase realmente
/* DELIMITER // */
/*
CREATE PROCEDURE UpdateEmployeeSalary(IN emp_id INT, IN new_salary DECIMAL(10, 2))
BEGIN
  UPDATE employees
  SET salary = new_salary
  WHERE id = emp_id;
END //
DELIMITER ;
*/
// IN indica que será un dato de entrada
// DECIMAL(10, 2) indica 10 dígitos, de los cuales pueden ser 2 dígitos decimales
// BEGIN y END funcionan en conjunto para iniciar y terminar las consultas
// // determina que ahí finalizará la ejecución SQL y seguido se escribe DELIMITER ; para determinar que se regresará a una consulta SQL "normal" al finalizar de nuevo con ;

// *** OTRO DATO INTERESANTE ***
// Si deseamos trabajar usando CORS, es muy importante saber que para trabajarlo con equipos ubicados en diferentes sitios del mundo por ejemplo, existen 2 maneras e hacer esto, con NGROK, de esta manera este se encarga de darnos una dirección, la cuál meteremos en nuestro CORS, y se encargará de hacer un direccionamiento a nuestro API de nuestro LOCALHOST, oara que así los demás accedan, es importante mencionar que debemos arrancar nosotros el servidor y solo funciona mientras que el servidor se esté ejecutando en nuestro localhost, así mismo solo es recomendable usa rne fase de desarrollo, y cualquier persona que cuente con el enlace podría tener acceso a la API

// La otra opción es usando AWS, que entra el enfoque de server-less, de hecho podría venir valiendo la pena con el framework justamente, para trabajarlo en fase de desarrollo podríamos dejarlo como * para que esté abierto a todo mundo, o especificar el localhost con el puerto de cada persona (lo cual en equipos grandes puede llegar a complicar las cosas), pero se podría trabajar de esta manera y ya para la fase de desarrollo indicar el sitio específico de donde se tendrían estas solicitudes

// Es importante mencionar que con cosas como autenticaciones, podemos mejorar nuestra seguridad por ejemplo