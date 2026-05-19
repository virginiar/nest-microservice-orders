<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nest-MicroServices - Orders microservice

Repositorio para el microservicio Orders de la aplicación Products realizada en [Nest](https://github.com/nestjs/nest). 
Basado en el curso de "NestJs + Microservicios: Aplicaciones escalables y modulares" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

## Configuración del proyecto

1. Instalar NestJS CLI

```bash
$ npm i -g @nestjs/cli
```
2. Clonar el repositorio

3. Instalar las dependencias

```bash
$ npm install
```

4. Crear un archivo ```.env``` basado en ```.env.template```.

5. Levantar la base de datos

```bash
$ docker compose up -d
```

6. Generar el cliente Prisma

```bash
$ npx prisma generate
```

7. Ejecutar el proyecto

```bash
$ npm run start:dev
```

## Aspectos estudiados

En este repositorio se trabajan los siguientes aspectos de Nest:
-	PostgreSQL
-	Prisma + PostgreSQL
-	Nest resource para microservicios
-	Paginaciones y extensiones de DTOs
-	Creación y cambio de estado de la orden
- Creación de la orden y su detalle

## Librerías utilizadas

Para la gestión de variables de entorno:

```bash
$ npm install dotenv
```

Para los esquemas de validación:

```bash
$ npm install joi
```

Para la gestión de microservicios:

```bash
$ npm i --save @nestjs/microservices
```

La conexión de la base de datos se realiza con Prisma:
```bash
$ npm install prisma --save-dev
$ npx prisma init
$ npx prisma migrate dev --name init

$ npm install @prisma/client
$ npx prisma generate
$ npm install @prisma/adapter-pg
```

Para las validaciones de datos se utilizan:

```bash
$ npm install class-validator class-transformer
```
