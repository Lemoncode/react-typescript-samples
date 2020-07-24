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

Otros repos guiados disponibles (React / Redux + TypeScript):

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

## Para empezar

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

### [02 Propiedades](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/02_Properties)

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

### [09 menú lateral](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/09_Sidebar)

Simple implementación de un menú lateral.

### [10 Tabla Mock](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/10_TableMock)

Renderiza una tabla y usa un componente hijo para renderizar cada fila, usando un mock de datos.

### [11 Tabla Axios](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/11_TableAxios)

Empezando desde la nuestra 10, elimina el mock de datos, utiliza una REST API real (api Github),
utiliza axios para mejorar el rendimiento de la llamada fetch.

### [12 React Router](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/12_ReactRouter)

Empezando desde la nuestra 03, empezando a utilizar React-Router (navegación SPA).

### [13 Formulario Login](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/13_LoginForm)

Empezando desde la nuestra 12, implementa una página de login básica,
que redireccione al usuario a otra página cuando el login haya completado satisfactoriamente.

### [14 Validación de formulario](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/14_FormValidation)

Empezando desde la nuestra 13, añadir validaciones al formulario de login.

### [15 Context](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/15_Context)

SEmpezando desde la nuestra 14, learn how React 16 context api works.
SEmpezando desde la nuestra 14, emprender cómo funciona la API de React 16 Context.

## Carpeta class vieja

### 00 Boiler plate

Bundling + npm start basado en webpack.

### 01 Hello React

Hello world, muestra siemple de React render.

### 02 Componentes

Creando una cabecera común y una página 'about' con componentes de React.

### 03 Navegación

Creando una página de "miembros", añadir navegación usando react-router.

### 04 Motrar datos

Crear un componenente de lista de 'sólo lectura' (table >> tr >> td),
leer una lista de miembros desde una API falsa y añadirlos dentro del componente 'state'

### 05 Prensentación de componentes

Dividir el componente de lista en dos: componente de Lista y Fila,
pasar la entidad del miembro a través de las 'props' del componente.

### 06 Manejando llamadas asíncronas

Reemplazar la API false con una llamada asíncrona a la API de github y obtener la lista de miembros de una organización.

### 07 Formularios

En esta muestra añadiremos un link en la página de miembros que navegará hacia la 'página del miembro'.
Esta nueva página mostrará un formulario donde tendrás que introducir la url del avatar, el 'login' y el 'id'
del nuevo miembro (sólo suponiendo que podemos añadir esa info).

### 08 Parámetros de navegación + Validaciones

Editar un miembro seleccionado, aquí aprenderemos cómo añadir parámetros al link de navegación
y cómo obtenerlo desde el componente.

La validación realizada hasta ahora:

- Login: requerido, debe ser una cadena de texto (al menos 3 caracteres de longitud).

### 09 Redux

Añadido soporte para Redux, estado aislado en 'Redux reducers', implementa carga, guardar,
ciclo de validación simple. Esta muestra usa una API falsa, en las siguientes muentras
haremos llamadas a operaciones asíncronas y las ajustaremos dentro de la arquitectura de Redux.

### 10 SpinnerAsync

Muestra un indicador de carga mientras la petición ajax está en progreso.

Para tener un recuento global de las promesas que estamos usando
[react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker)
y mostras un bonito spinner [react-spinner](https://github.com/davidhu2000/react-spinners)

### 11 Testeando reducers

Muestra actualizada usando Jest.

### 12 Testeando acciones

Muestra actualizada usando Jest.

### 13 Testeando componentes (Contenedores y presentaciones)

Pendiente de actualizar Jest + Enzyme

### 14 Reemplazando Redux Thunk con Redux Saga

Pendiente de actualizar

### 15 Lazy Loading y React-Router

Pendiente de actualizar

### 16 Añadir middlewares personalizados

Pendiente de actualizar

### 17 Añadir soporte para ReactHotloader y herramientas ReduxDev

Pendiente de actualizar

### 18 Hooks

Replace class components by stateless components using Hooks.

### 19 Formulario Login

Añadir página de Login usando AMaterial-UI.

# Colaboradores

Muchas gracias a los colaborades por mantener el proyecto actualizado en todos los ejemplos.

- [Jehu Sagardoy](https://github.com/jsagardoy)
- [Luis del Amo](https://github.com/delamux)

# Sobre Basefactor + Lemoncode

Somos un equipo innovador de expertos en JavaScript, apasionados en convertir tus ideas en productos robustos y consistentes.

[Basefactor, consultoría por Lemoncode](http://www.basefactor.com) proporciona servicios de consultoría y servicios de orientación.

[Lemoncode](http://lemoncode.net/services/en/#en-home) proporciona servicios de formación.

Para la audiencia de LATAM/España estamos llevando a cabo un Master Online Front End, más info:
[http://lemoncode.net/master-frontend](http://lemoncode.net/master-frontend)
