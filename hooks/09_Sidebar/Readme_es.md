# 09 Sidebar

En este ejemplo vamos a añadir una barra lateral a nuestra aplicación, empezaremos con una implementación específica, y luego la haremos genérica.

# Pasos a seguir

- Tomaremos como punto de partida el ejemplo _08 ColorPickerRefactor_, copiamos el contenido de ese archivo y ejecutamos _npm install_. 

```bash
npm install
```

- Cree un archivo llamado _src/components/sidebar.css_ y añada los siguientes estilos (http://www.w3schools.com/howto/howto_js_sidenav.asp):

_./src/components/sidebar.css_

```css
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #808080; /* Gray*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
```

- Vamos a usar módulos CSS, así que vamos a configurarlo.

_./webpack.config.js_

```diff
  module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
-      extensions: ['.js', '.ts', '.tsx']
+      extensions: ['.js', '.ts', '.tsx', '.css']
    },
```

- Sólo usaremos módulos CSS para hojas de estilo personalizadas. No usaremos Módulos CSS para otros archivos CSS, como Bootstrap (carpeta node_modules).

_./webpack.config.js_

```diff
  {
    test: /\.css$/,
+   include: /node_modules/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  },
+  // Use CSS modules for custom stylesheets
+  {
+    test: /\.css$/,
+    exclude: /node_modules/,
+    use: [
+        MiniCssExtractPlugin.loader,
+        {
+          loader: 'css-loader',
+          options: {
+            modules: true,
+            localIdentName: '[name]__[local]___[hash:base64:5]',
+            camelCase: true,
+          },
+        },
+      ]
+  },
+  // Do not use CSS modules in node_modules folder

```

- Vamos a crear el componente de la barra lateral, _src/components/sidebar.tsx_. Crearemos sólo
  un rectángulo e interactuaremos con la animación.

Necesitamos instalar los tipos para _node_, ya que usaremos _require_ a la hora de importar desde el _css_.

```bash
npm install @types/node --save-dev
```

_./src/components/sidebar.tsx_

```jsx
import * as React from "react";

const classNames = require("./sidebar.css");

export const SidebarComponent = () => (
  <div id="mySidenav" className={classNames.sidenav}>
    <span>Basic side bar, first steps</span>
  </div>
);
```

- Añadimos este componente a nuestro barrel _index_

_./src/components/index.ts_

```diff
export * from "./hello";
export * from "./nameEdit";
export * from "./colorBrowser";
export * from "./colorPicker";
+ export * from "./sidebar";
```

- Vamos a añadir un _id_ al elemento _body_ de la página _src/index.html_

_./src/index.html_

```diff
-  <body>
+  <body id="main">
```

- Colocamos el componente añadiéndolo en `app.tsx`: 

_./src/app.tsx_

```diff
import * as React from "react";
- import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker } from "./components";
+ import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker, SidebarComponent } from "./components";
import { Color } from "./model/color";
```

_./src/app.tsx_

```diff
  return (
    <>
+      <SidebarComponent />
      <ColorBrowser color={color} />
```

- Comencemos con la parte interesante de esta implementación, agreguemos una opción para mostrar/ocultar la barra lateral _sidebar.tsx_.

_./src/components/sidebar.tsx_

```diff
import * as React from 'react';

const classNames = require('./sidebar.css');

+ interface Props {
+  isVisible: boolean;
+ }

- export const SidebarComponent = () =>
+ export const SidebarComponent = (props: Props) =>
    <div id="mySidenav" className={classNames.sidenav}>
        <span>Basic sidebar, first steps</span>
    </div>
```

- Ahora vamos a añadir algo de lógica para mostrar / ocultar la barra lateral en caso de que se actualice dicha opción.


_./src/sidebar.tsx_

```diff
import * as React from 'react';

const classNames = require('./sidebar.css');

interface Props {
  isVisible: boolean;
};

+    const divStyle = (props: Props): React.CSSProperties => ({
+      width: (props.isVisible) ? '23rem' : '0rem'
+    });

export const SidebarComponent = (props: Props) =>
-    <div id="mySidenav" className={classNames.sidenav}>
+    <div id="mySidenav" className={classNames.sidenav}
+      style={divStyle(props)}
+    >
        <span>Basic sidebar, first steps</span>
    </div>
```

- Hagamos una prueba rápida para mostrar siempre la barra lateral:

_./src/app.tsx_

```diff
 return (
    <>
-      <SidebarComponent />
+      <SidebarComponent isVisible={true}/>
      <ColorBrowser color={color} />
```

- Si arrancamos el proyecto veremos la barra lateral que hemos creado (un rectángulo gris).


```bash
npm start
```
_¿Qué pasa si no puedo ver la barra lateral?_ Compruebe que _webpack.config.js_ y sus estilos se han aplicado, es posible que tenga que iniciar de nuevo _webpack-dev-sever_ (relanzar _npm start_), compruebe con dev tools que está cargando los estilos CSS.

- Ahora a nivel de aplicación podemos recordar la opción de visibilidad, y añadir un botón para alternar la visualización de la barra lateral.


_./src/app.tsx_

```diff
export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  });
+ const[isVisible, setVisible] = React.useState(false);
```

_./src/app.tsx_

```diff
  return (
    <>
-      <SidebarComponent isVisible={true} />
+      <SidebarComponent isVisible={isVisible} />
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === "" || editingName === name}
      />
+       <div style={{float: 'right'}}>
+         <button
+           onClick={() => setVisible(!isVisible)}>
+           Toggle Sidebar
+         </button>
+       </div>
    </>
```

- Iniciemos la aplicación para comprobar cómo se comporta:

```bash
npm start
```

> Ejercicio: la llamada en línea a la función dentro de _onClick_ no se
> considera una buena práctica (en cada render se recreará la función), 
> vamos a refactorizarla en dos pasos:

- Primero extraeremos esta lógica a una función, la llamaremos _toggleSidebarVisibility_.

- Ahora envolvemos _visibility_ y _toggleSidebarVisibility_ en un _hook_ personalizado.

* Hasta ahora todo va bien, pero ¿qué pasa si queremos que esta barra lateral sea un componente reutilizable? Podríamos simplemente mostrar el marco pero el contenido debe ser dinámico.

* Comencemos por añadir algo de contenido al instanciar la barra lateral (_app.tsx_).


_./src/app.tsx_

```diff
    <>
-      <SidebarComponent isVisible={isVisible} />
+      <SidebarComponent isVisible={isVisible}>
+        <h1>Cool Scfi movies</h1>
+          <ul>
+            <li><a href="https://www.imdb.com/title/tt0816692/">Interstellar</a></li>
+            <li><a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a></li>
+            <li><a href="https://www.imdb.com/title/tt0062622/">2001: a space odyssey</a></li>
+         </ul>
+      </SidebarComponent>
      <ColorBrowser color={color} />
```

> Tenemos un error, _children_ no está definido, vamos a arreglarlo en el 
> siguiente paso....

- Ahora en _sidebar.tsx_ volcaremos este contenido usando {this.props.children}

_./src/components/sidebar.tsx_

```diff
- export const SidebarComponent = (props: Props) => (
+ export const SidebarComponent: React.StatelessComponent<Props> = (props)  => (

  <div id="mySidenav" className={classNames.sidenav} style={divStyle(props)}>
-    <span>Basic side bar, first steps</span>
+    {props.children}
  </div>
);
```

- Probemos el ejemplo

```
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
