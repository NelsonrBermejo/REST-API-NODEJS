# REST-API-NODEJS
base de datos simulada

POSTMAN GET
http://localhost:3000/api/movies

POSTMAN POST

http://localhost:3000/api/movies
KEY: Content-Type VALUE: application/json
BODY: raw
{
    "title": "Toy Story",
    "director": "jejeje",
    "year": "1991",
    "rating": "11"
}

para validar datos se puede utilizar express-validator

POSTMAN DELETE

npm i underscore

elimina el id 2
http://localhost:3000/api/movies/2

POSTMAN PUT
actualiza en el id uno con los nuevos datos
http://localhost:3000/api/movies/1

{
    "title": "Toy Story",
    "director": "jejeje",
    "year": "1991",
    "rating": "9.7"
   
}

/******************JSONPLACEHOLDER*********************/
para poder utilizar este servicio agregar:

npm i node-fetch


https://jsonplaceholder.typicode.com/
rutas de servicio:
https://jsonplaceholder.typicode.com/users
