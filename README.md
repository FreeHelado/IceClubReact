![Logo icecream](/public//assets/logo.svg)

# IceClub - Proyecto para el curso de React Js de coderhouse

## Alumno: Alejandro Ferreira | Com.: 55735

Este proyecto se inici� con [Create React App] (https://github.com/facebook/create-react-app).\
Y fue desplegado con Vercel accecible en: (https://ice-club-react.vercel.app/).

## Sobre el proyecto

### `El cat�logo`

Se simula un e-commerce de discos, durante el transcurso de la cursada, en los ejercicios de API, integr� el cat�logo de la API de Discogs, levantando como cat�logo mi colecci�n de discos de mi perfil de Discogs, luego utilic� parte del JSON que brinda la API para simular el cat�logo de forma local, y por �ltimo lo repliqu� este cat�logo en FireStore, con una colecci�n con el nombre 'discos'.\
[Colecci�n de Discogs](https://www.discogs.com/es/user/AleFerreira27/collection?header=1)\
[API de Discogs](https://www.discogs.com/developers#page:user-collection,header:user-collection-collection)\
[JSON de Discogs](https://api.discogs.com/users/AleFerreira27/collection/folders/0/releases)

### `Las im�genes`

Se opt� por alojar las im�genes de los discos en un directorio local del proyecto para poder extraer el color promedio de las mismas y presentarlo en el background del ItemDetail y el opuesto para poder contrastar los textos.

### `Categor�as`

Se filtran los discos por categor�as, las mismas fueron inventadas para recrear la navegaci�n en el proyecto

### `Orders`

Los pedidos ingresan a firestore a una colecci�n con el nombre 'orders'. En donde se descuenta el stock de cada producto en la colecci�n 'discos'. Cuando un disco tiene stock 0, se presenta como "Agotado". Qued� el disco Abbey Road en esta condici�n. Y el disco "Foregrow EP" de "Frusciante" con stock corto de 5 para agotarlo. El resto tiene stock alto para hacer pruebas sin problemas.

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicaci�n en modo de desarrollo.\\
[http://localhost:3000](http://localhost:3000) para verlo en su navegador..

### `npm test`

Inicia el corredor de prueba en el modo de reloj interactivo.\
