# Anime API

Proyecto con Graphql, Apollo y Nodejs, el objetivo es generar una API
serverless.

## Iniciando el servicio de Apollo server

> Para ejecutar un servidor de Apollo se requiere un esquema de graphql

Los terminos claves de graphql son

- Query
- Mutation
- Resolver
- Schema

El query nos permite leer los registros de la base datos, es la forma de extraer información y es equivalente a un select de sql.

Los parametros que recibe se llaman "input"

Los mutations se usan para guardar, actualizar y borrar registros de la base de datos, son equivalentes a los metodos PUT, POST, PATCH y DELETE.

El schema es la descripción de los objetos que conforman a los datos de la aplicación, dentro del schema los nodos obligatorios que deben de existir es la definicion de un query y un resolver

El Resolver se encarga de la comunicacion entre el lenguaje del servidor y los datos. Son funciones que se encargan de retornar los valores y mostrarlos segun el schema.

El nombre del resolver debe ser igual a lo definido en el schema.
