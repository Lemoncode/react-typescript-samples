# 01 Hello React

En este ejemplo crearemos nuestro primer componente de react y lo conectaremos con el DOM a través de react-dom.

Tomaremos como de punto de inicio el ejemplo
 _00 Boilerplate_.

Pasos a seguir:

- Instalar librerías de react y react-dom.
- Instalar react y react-dom typescript definitions.
- Actualizar el index.html para crear un punto de entrada para los componentes de react.
- Crear un componente de react simple.
- Enlazar este componente usando react-dom.

## Requisitos previos

Instale [Node.js y npm](https://nodejs.org/en/) (v8.9.4 o superior) si aún no los tiene instalados.

> Verifique que está usando las versiones v8.x.x de `node` y la v5.x.x de `npm` ejecutando `node -v` y` npm -v` en un terminal o consola. Las versiones anteriores pueden producir errores.

## Pasos para construir el ejemplo

- Copie el contenido de la carpeta `00 Boilerplate` a una carpeta vacía para la muestra.

- Instale los paquetes npm descritos en [./package.json](./package.json) y verifique que funcionen:

```bash
npm install
```

- Instalar las bibliotecas `react` y `react-dom` como dependencias del proyecto.

```bash
npm install react react-dom --save
```

- Instalar también las definiciones de Typescript para `react` y` react-dom` pero como dependencias de desarrollo

```bash
npm install @types/react @types/react-dom --save-dev
```

- Actualice el [./src/index.html](./src/index.html) para crear un punto de entrada para el componente de `react`.

_[./src/index.html](./src/index.html)_
```diff
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <h1>Sample app</h1>
+     <div id="root"></div>
    </body>
  </html>
```

- Cree un componente de react simple (se creará dentro de un nuevo archivo llamado [./src/hello.tsx](./src/hello.tsx) bajo la carpeta `src`].

_[./src/hello.tsx](./src/hello.tsx)_
```jsx
import * as React from 'react';

export const HelloComponent = () => {
  return (
    <h2>Hello component !</h2>
  );
}
```

- Conecta este componente usando `react-dom` bajo [./src/index.tsx](./src/index.tsx) (tenemos que cambiar el nombre de esta extensión de archivo de `ts` a` tsx` y reemplazar el contenido).

_[./src/index.tsx](./src/index.tsx)_
```diff
- document.write('Hello from index.ts!');

+ import * as React from 'react';
+ import * as ReactDOM from 'react-dom';

+ import { HelloComponent } from './hello';

+ ReactDOM.render(
+   <HelloComponent/>,
+   document.getElementById('root')
+ );
```

- Modifique el archivo [./webpack.config.js](./webpack.config.js) y cambie el punto de entrada de [./src/main.ts](./src/main.tsx) a [./src/main.tsx](./src/main.tsx).

_[./webpack.config.js](./webpack.config.js)_
 ```diff
...

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
-   extensions: ['.js', '.ts']
+   extensions: ['.js', '.ts', '.tsx']
  },
  entry: {
-   app: './index.ts',
+   app: './index.tsx',
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
  ...
  module: {
    rules: [
      {
-       test: /\.ts$/,
+       test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      ...
    ],
  },
  ...
};

 ```

- Ejecuta el ejemplo:

```bash
npm start
```
# Sobre Lemoncode 

- Somos un equipo de desarrolladores ampliamente experimentados, establecidos como grupo desde 2010. Somos especialistas en tecnologías Front-End y .NET. Picha [aquí](http://lemoncode.net/services/en/#en-home) para más imformación sobre nosotros: 