# React Typescript - ejemplos

[🇬🇧 English version](./readme.md)

El objetivo de este proyecto es ofrecer un set de ejemplos simples, proporcionando una guía paso a paso
para empezar a trabajar con React y TypeScript.

Hemos incorporado un set de ejemplos basados en hooks.

Ahora mismo hay dos carpetas principales:

- [Hooks](./hooks): set de ejemplos migrados a hooks (ahora mismo 15 ejemplos), si eres nuevo en React, o vas a empezar a trabajar en
un nuevo proyecto, Te recomendamos que lo hagas a través de ´estos ejemplos.

- [Old_class_components_samples](./old_class_components_samples): Los ejemplos viejos, sólo en caso de que necesite trabajar en un proyecto de versiones viejas de React o necesites mantener código legacy.

Si quieres sumerjirte más en React Hooks puedes chequear este repo: [React Hooks By Example](https://github.com/Lemoncode/react-hooks-by-example)

Other guided repos available (react / redux + typescript):

- [Redux By Sample](https://github.com/Lemoncode/redux-by-sample)
- [Desde React a Redux](https://github.com/Lemoncode/from-react-to-redux-ts)
- [Redux Sagas](https://github.com/Lemoncode/redux-sagas-typescript-by-example)

# Ejemplos

Características:

- Bundling basado en webpack.
- Basado en React + Typescript.
- Navegación simple usando react-router.
- Gestionando llamadas asíncronas y actualizaciones.
- Usando la librería Redux (todavía no está disponible para la version en Hooks, próximamente).
- Manejando llamadas asíncronas vía Redux-Thunk + Redux Saga (todavía no está disponible para la version en Hooks, próximamente).
- Añadiendo sporte para test unitarios (todavía no está disponible para la version en Hooks, próximamente).
- Implementando Lazy Loading (todavía no está disponible para la version en Hooks, próximamente).
- ...

## Para empezar:

1. Instalar [NodeJS](http://www.nodejs.org)
2. Descarga este repo
3. Abre la consola de comandos que prefieras y haz 'cd' en el directorio de ejemplo dentro de este repo en tu máquina.
4. `npm install` - Instalación de los paquetes
5. `npm start` - Build del proyecto y lanza el servidor web (webpack-dev-server).
6. Copia y pega esta dirección en tu navegador [http://localhost:8080/](http://localhost:8080/) si ´éste no se abre automáticamente.

# muestras

## Hooks

### [00 Boiler plate](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/00_BoilerPlate)

Bundling + npm start basado en webpack.

### [01 Hello React](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/01_HelloReact)

Muestra el texto 'Hello React'.

Hello world, muestra siemple de React render.

### [02 Properties](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/02_Properties)

Muestra el texto 'Hello {name}' (donde nombre es una propiedad que contiene el nombre).

Introducción al concepto básico de React, manejando propiedades.

### [03 State](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/03_State)

Empezando desde la muestra 02, permite que el usuario cambie el nombre que se muestra.

Introducción al concepto básico de React, manejando el Estado (State) usando Hooks.

### [04 Callback](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/04_Callback)

Empezando desde la nuestra 03, permite que el usario cambie la propiedad name
solo cuando presiona sobre el botón _change_ .

Usando callbacks.

### [05 Refactor](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/05_Refactor)

Refactor de la muestra 04, Limpieza y discusión sobre dónde debe estar el estado.

Reafactorizar el trabajo realizado.

### [06 Enable](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/06_Enable)

Empezando desde la nuestra 05, enable / disable del botón _change_
cuando el texto está vacío o tiene el mismo nombre que originalmente,.

Componentes Enable/disable

### [07 ColorPicker](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/07_ColorPicker)

demo simple de color picker (muestras cómo funcionan las propiedades).

### [08 ColorPicker Refactor](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/08_ColorPickerRefactor)

ColorPicker refactorizado.

### [09 Sidebar](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/09_Sidebar)

Simple implementación de un menú lateral.

### [10 Table Mock](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/10_TableMock)

Renderiza una tabla y usa un componente hijo para renderizar cada fila, usando un mock de datos.

### [11 Table Axios](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/11_TableAxios)

Empezando desde la nuestra 10, elimina el mock de datos, utiliza una REST API real (api Github),
utiliza axios para mejorar el rendimiento de la llamada fetch.

### [12 React Router](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/12_ReactRouter)

Empezando desde la nuestra 03, empezando a utilizar React-Router (navegación SPA).

### [13 Login Form](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/13_LoginForm)

Empezando desde la nuestra 12, implementa una página de login básica,
que redireccione al usuario a otra página cuando el login haya completado satisfactoriamente.

### [14 Form Validation](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/14_FormValidation)

Empezando desde la nuestra 13, añadir validaciones al formulario de login.

### [15 Context](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/15_Context)

SEmpezando desde la nuestra 14, learn how React 16 context api works.
SEmpezando desde la nuestra 14, emprender cómo funciona la API de React 16 Context.

## Carpeta class vieja

### 00 Boiler plate

Bundling + npm start basado en webpack.

### 01 Hello React

Hello world, muestra siemple de React render.

### 02 Components

Creando una cabecera común y una página 'about' con componentes de React.

### 03 Navigation

Creando una página de "miembros", añadir navegación usando react-router.

### 04 Display data

Crear un componenente de lista de 'sólo lectura' (table >> tr >> td),
leer una lista de miembros desde una API falsa y añadirlos dentro del componente 'state'

### 05 Presentational Components

Dividir el componente de lista en dos: componente de Lista y Fila,
pasar la entidad del miembro a través de las 'props' del componente.

### 06 Handling asynchronous calls

Reemplazar la API false con una llamada asíncrona a la API de github y obtener la lista de miembros de una organización.

### 07 Forms

En esta muestra añadiremos un link en la página de miembros que navegará hacia la 'página del miembro'.
Esta nueva página mostrará un formulario donde tendrás que introducir la url del avatar, el 'login' y el 'id'
del nuevo miembro (sólo suponiendo que podemos añadir esa info).

### 08 ParamNavigation + Validations

Editar un miembro seleccionado, aquí aprenderemos cómo añadir parámetros al link de navegación
y cómo obtenerlo desde el componente.

La validación realizada hasta ahora:

- Login: requerido, debe ser una cadena de texto (al menos 3 caracteres de longitud).

### 09 Redux

Añadido soporte para Redux, estado aislado en 'Redux reducers', implementa carga, guardar,
ciclo de validación simple. Esta muestra usa una API falsa, en las siguientes muentras
haremos llamadas a operaciones asíncronas y las ajustaremos dentro de la arquitectura de Redux.

### 10 SpinnerAsync

Display a busy indicator when an ajax request is in progress.

To have a global count of promises gong on we are using [react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) and to display a cool spinner [react-spinner](https://github.com/davidhu2000/react-spinners)

### 11 Testing reducers

Sample updated using Jest.

### 12 Testing actions

Sample updated using Jest.

### 13 Testing components (Containers and Presentationals)

Pending update Jest + Enzyme

### 14 Replacing Redux Thunk with Redux Saga

Pending update

### 15 Lazy Loading and React-Router

Pending update

### 16 Add custom middlewares

Pending update

### 17 Add support for ReactHotloader and ReduxDev Tools.

Pending update

### 18 Hooks

Replace class components by stateless components using Hooks.

### 19 LoginForm

Add a login page using Material-UI.

# Contributors

Special thanks to [Jehu Sagardoy](https://github.com/jsagardoy) for his contributions checking
and getting uptodate examples.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
