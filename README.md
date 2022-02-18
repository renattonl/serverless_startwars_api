# Serverless Framework Node HTTP API on AWS

Este es un proyecto que tiene como finalidad crear una API con el framework Serverless usando Node.js; desplegando el proyecto en los servicios de AWS.

Se ha creado 2 recursos GET, para poder obtener el registro y POST para 
crear el registro. Se ha utilizado la api de [Swapi - The Star Wars API](https://swapi.dev/). Se ha utilizado como modelo al recurso [vehicle](https://swapi.dev/documentation#vehicles) de la API.

## Uso

### Despliegue
```bash
$ npm install -g serverless
$ npm install
$ cp .env.example .env
$ serverless config credentials --provider aws --key MY_KEY --secret MY_SECRET
$ serverless deploy
```

Despues de desplegar el proyecto, la salida de consola sera algo como esto:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

### Invocación

Después de una implementación exitosa, puede llamar a las URL con su respectivo Verbo.

```bash
GET https://xxxxxxx.execute-api.us-east-1.amazonaws.com/vehiculo/4
POST https://xxxxxxx.execute-api.us-east-1.amazonaws.com/vehiculo
```

### Entorno local

Es importante tener instaldo [Java JRE](https://www.java.com/en/download/manual.jsp), ya que se esta usando el plugin `serverless-dynamodb-local`. 

```bash
$ sls dynamodb install
$ sls dynamodb start --migrate
$ npm run dev
```
Para poder llamar la función `crearVehiculo` y su respectiva respuesta:

```bash
serverless invoke local --function crearVehiculo
```
```json
{
    "statusCode": 400,
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "message": "must have required property 'capacidad_cargo'"
    }
}
```

Para poder llamar la función `obtenerVehiculo` y su respectiva respuesta:

```bash
serverless invoke local --function obtenerVehiculo
```
```json
{
    "statusCode": 400,
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "message": "must have required property 'capacidad_cargo'"
    }
}
```