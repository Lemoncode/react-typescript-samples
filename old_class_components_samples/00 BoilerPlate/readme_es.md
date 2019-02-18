# 00 Boilerplate

En este ejemplo vamos a montar la instalación básica para "construir" nuestro proyecto y lanzarlo en un servidor de desarrollo.

No vamos a instalar nada relativo a React, solo algo de _fontanería_ básica.
En el ejemplo 01 empezaremos importando React y ReactDOM.

Configuraremos un proyecto <abbr title="Gestor de paquetes de Node.js, para el entorno de ejecución JavaScript Node.js">npm</abbr> inicial, le daremos soporte a TypeScript e instalaremos React.<br />
Solo entonces crearemos un ejemplo **index.ts**.

Resumen de los pasos:

- Requisitos previos: Instalar Node.js
- Inicializar **[./package.json](./package.json)** (con `npm init`)
- Instalar:
    - Webpack, webpack-cli y webpack-dev-server.
    - TypeScript.
    - Babel.
    - Bootstrap.
- Configurar **[./webpack.config.js](./webpack.config.js)**
- Crear un fichero ts de prueba.
- Crear un fichero HTML simple.

# Requisitos previos

Instalar [Node.js y npm](https://nodejs.org/en/) (v8.9.4) si no están ya instalados en tu ordenador.

> Comprueba que tienes funcionando al menos la versión v8.x.x de node y la 5.x.x de npm ejecutando `node -v` y `npm -v` en una terminal o consola. Versiones más antiguas pueden dar errores.

## Pasos para construir el proyecto

- Crea y navega al directorio en el que vas a montar el proyecto (vacío).

- Ejecuta `npm init`. Te preguntará por algo de información relativa al proyecto (por ejemplo, le daremos de nombre _reactboilerplate_ y como descripción _Sample working with React,TypeScript and Webpack_).
Una vez cumplimentes la información se generará un fichero **package.json**.

 ```bash
 npm init
 ```

- Instala **webpack** localmente,como una dependencia de desarrollo.

 ```bash
 npm install webpack webpack-cli --save-dev
 ```
- Instala **webpack-dev-server** localmente, como una dependencia de desarrollo (la razón de instalarlo localmente y no globalmente es para que sea fácil de montar para ser ejecutado, por ejemplo, en una máquina limpia sin tener que instalar nada globalmente excepto nodejs).

 ```bash
 npm install webpack-dev-server --save-dev
 ```

- Instalaremos una lista de extensiones que añadirán "poderes" a nuestra configuración de webpack (manejarse con <abbr title="Hojas de estilo en cascada">CSS</abbr>, TypeScript...)

 ```bash
 npm install awesome-typescript-loader css-loader file-loader html-webpack-plugin style-loader url-loader mini-css-extract-plugin --save-dev
 ```

- Para poder lanzar `webpack-dev-server`, modificamos el archivo **[./package.json](./package.json)** añadiendo las siguientes líneas bajo el objeto scripts:
- `"start": "webpack-dev-server --mode development --inline --hot --open",` ,permitirá lanzar webpack desde la linea de comandos con la orden `npm start`. 
  - `"build": "webpack --mode development"`

_[./package.json](./package.json)_
```diff
{
  "name": "reactboilerplate",
  "version": "1.0.0",
  "description": "Sample working with React,TypeScript and Webpack",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
+    "start": "webpack-dev-server  --mode development --inline --hot --open",
+    "build": "webpack  --mode development"
  },
  ...
}
```

- Instalemos localmente TypeScript
(versión 2.0 o superior):

 ```bash
 npm install typescript --save-dev
 ```

- Necesitaremos también crear un fichero **[./tsconfig.json](./tsconfig.json)** en el directorio raíz de nuestro proyecto

_[./tsconfig.json](./tsconfig.json)_
 ```json
{
    "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
 ```

 - Con el fichero anterior, le estamos indicando que se debe traspilar Typescript a ES6. Por lo que ES6 hay que traspilarlo a ES5. Para esto, necesitaremos las librerías de Babel. Hay que instalar **babel-core** y **babel-preset-env**:


 ```bash
 npm install babel-core babel-preset-env --save-dev
 ```

 - Babel necesita ser configurado para funcionar. Para ello creamos el archivo **[./.babelrc](./.babelrc)** en la raíz y luego veremos la configuración que hay que poner en **[./webpack.config.js](./webpack.config.js)** para usar Babel. En este ejemplo, vamos a usar esta configuración de .babelrc: 

_[./.babelrc](./.babelrc)_
 ```json
 {
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ]
}
 ```

- Instalaremos bootstrap:

 ```bash
 npm install bootstrap --save
 ```

- Ahora nuestro fichero **[./package.json](./package.json)** debería quedar así:

_[./package.json](./package.json)_
 ```json
{
  "name": "reactboilerplate",
  "version": "1.0.0",
  "description": "Sample working with React,TypeScript and Webpack",
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
  },
  "author": "Lemoncode",
  "license": "MIT",
  "dependencies": {
    "bootstrap": "^3.3.7",
    "jquery": "^3.2.1"
  },
  "devDependencies": {
    "awesome-typescript-loader": "^3.1.3",
    "babel-core": "^6.25.0",
    "babel-preset-env": "^1.5.2",
    "css-loader": "^0.28.4",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.28.0",
    "style-loader": "^0.18.2",
    "typescript": "^2.3.4",
    "url-loader": "^0.5.9",
    "webpack": "^2.6.1",
    "webpack-dev-server": "^2.4.5"
  }
}
```

- Creamos un subdirectorio **src** y dentro de él un archivo **index.ts** básico con el siguiente código:

**[index.ts](./src/index.ts)**
 ```javascript
document.write('Hello from index.ts!');

 ```

- Creamos un fichero **[index.html](./src/index.html)** muy básico (también en el directorio **src**):

_[./src/index.html](./src/index.html)_
 ```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="well">
      <h1>Sample app</h1>
    </div>
  </body>
</html>
 ```

- Ha llegado el momento de crear un sencillo fichero **[./webpack.config.js](./webpack.config.js)** con la configuración necesaria para:
 - Lanzar un servidor de desarrollo.
 - Transpilar de TypeScript a JavaScript.
 - Montar Twitter Bootstrap (incluyendo fuentes tipográficas, etc...).
 - Generar los ficheros finales en el directorio **dist**.

_[./webpack.config.js](./webpack.config.js)_
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: './index.ts',
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
        },
      },
    ],
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    noInfo: true,
  },
  plugins: [
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

 ```

- Ejecutar webpack con:

 ```bash
 npm start
 ```

Somos un equipo de desarrolladores ampliamente experimentados, establecidos como grupo desde 2010. Somos especialistas en tecnologías Front-End y .NET. Picha [aquí](http://lemoncode.net/services/en/#en-home) para más imformación sobre nosotros: 