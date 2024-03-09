# Prueba Técnia 🏅 2024 - ITTI

> Esta es una prueba técnica para la empresa ITTI

## Parámetros del Test

Preparar un proyecto de react o react native, en caso de usar react native utilizar CLI. En lo posible utilizando Typescript y lo subirlo a un repositorio de Github/Gitlab/Bitbucket/etc, una vez termine el proyecto (o antes, si te parece) me puedes pasar el link y me das acceso en caso de que sea privado para poder realizar la evaluación.

Básicamente estamos hablando de una aplicación que lista películas y el detalle de cada una de ellas. El diseño de la aplicación no es objeto de evaluación, pero se puede utilizar libs de diseño. Ej. (MUI, Paper, tailwind).

La api que usaremos para obtener los datos de las películas es la siguiente: http://www.omdbapi.com/

## Requisitos de la Aplicación:

### Buscador;

La aplicación debe contar con un buscador y un filtro en el cual se consulte al servidor buscando por:

- Título
- Año

### Listado;

Cada item del listado debe contener los siguientes datos:

- Imagen
- Titulo
- Rating
- Descripción corta

### Pantalla de la película;

Al tocar un item del listado se debe navegar a la pantalla donde se pueden ver mas detalles de la película, tales como:

- Imagen/es
- Nombre
- Rating
- Descripción larga
- Director
- Listado de actores
- Otro dato que se crea conveniente

Se puede utilizar gestores de estado (redux, zustand, MobX, etc).

Se tendrá en cuenta para la evaluación:

- Buenas prácticas
- Técnicas de mejoras de rendimiento
- Typescript
- Patrones de diseño / Arquitectura

## Tecnologías Implementadas:

### Front-End:

- React Native
- Gluestack
- Redux
- Redux-Toolkit
- Axios
- React Navigation (Stack)

## Link de Presentación del Proyecto

https://www.loom.com/share/8b18653f978d43d7a9bf129a5b7bb068?sid=34046f11-475a-4a10-b6de-e985b2f3cc00

## Instalação

- Clonar o projeto

```
git clone https://github.com/eccianime/testITTI/
```

- Cambiar a la carpeta del proyecto

```
cd testITTI
```

- Instalar las dependencias com yarn ou npm e instalar las dependencias de iOS (este es un proyecto para React Native CLI)

```
yarn
npx pod-install
```

o

```
npm i
npx pod-install
```

- Ejecutar el proyecto

```
yarn start
yarn android
yarn ios
```

o

```
npm run start
npm run android
npm run ios
```
