# 07 Colopicker

In this sample we are going to implement a color picker component, it will allow us to choose between red / green / blue components and display the resulting color.

We will start with a non optimal implementation and we will refactor it in sample 08.

# Steps

- We will take as starting point sample _06 Enable_, copy the content from that project and
  execute _npm install_

```bash
npm install
```

- The current project structure is getting a bit cluttered, let's do some quick organization.

- We will create a components folder under _src_ (_src/components_).

- Inside that components folder we will copy all the components that we have created (_nameEdit.tsx_
  and _hello.tsx_).

- We will create an _index_ file under _src/components_ and create a barrel (by doing this, later
  on we can refactor the content of the components folder without affecting other external files in
  the application that may import them).

_./src/components/index.tsx_

```typescript
export * from "./hello";
export * from "./nameEdit";
```

- A color is composed by it's Red, Green and Blue values, we are going to define an entity that
  will have that structure.

_./src/model/color.ts_

```typescript
export interface Color {
  red: number;
  green: number;
  blue: number;
}
```

- Let's start by creating a _ColorBrowser_ component: this color will just display the
  selected color (under the hood is just a div, by applying css styling we provide a width
  and height to that rectangle, and a background color).

_./src/components/colorBrowser.tsx_

```typescript
import * as React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
}

export const ColorBrowser = (props: Props) => {
  const divStyle: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${props.color.red},${props.color.green}, ${
      props.color.blue
    })`
  };

  return <div style={divStyle} />;
};
```

- Let's add this component to our barrel definition.

_./src/components/index.ts_

```diff
export * from "./hello";
export * from "./nameEdit";
+ export * from './colorBrowser';
```

- Now let's refactor the components imports that we were consuming on the
  _app.tsx_ file.

```diff
import * as React from "react";
- import { HelloComponent } from "./hello";
- import { NameEditComponent } from "./nameEdit";
+ import { HelloComponent, NameEditComponent, ColorBrowser} from './components';
```

- Let's include color information in our _application_ component.

_./src/app.tsx_

```diff
+ import {Color} from './model/color';

// (...)

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
+ const [color, setColor] = React.useState<Color>({red: 20, green: 40, blue: 180})
```

> We should consider here whether makes sense to group states, or even in more complex
> cases use reducer / action approach (hooks).

- Let's use the color browser to display that info.

_./src/app.tsx_

```diff
  return (
    <>
+      <ColorBrowser color={color}/>
      <HelloComponent userName={name} />

```

- Let's give a try and see our _ColorBrowser_ in action.

```bash
npm start
```

- We want to add color picker editing capabilities, let's create a color picker component
  and add a single slider for one of the color values.

_./src/components/colorpicker.tsx_

```typescript
import * as React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => (
  <div>
    <input
      type="range"
      min="0"
      max="255"
      value={props.color.red}
      onChange={event =>
        props.onColorUpdated({
          red: +event.target.value,
          green: props.color.green,
          blue: props.color.blue
        })
      }
    />
    {props.color.red}
  </div>
);
```

- Let's register this component in our barrel.

_./src/components/index.ts_

```diff
export * from "./hello";
export * from "./nameEdit";
export * from './colorBrowser';
+ export * from './colorPicker';
```

- Let's add this component to our import statement in the _app_ file.

_./src/app.tsx_

```diff
import * as React from "react";
- import { HelloComponent, NameEditComponent, ColorBrowser } from "./components";
+ import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker } from "./components";
import { Color } from "./model/color";
```

- Let's use the _ColorPicker_ in our _app_ component.

```diff
  return (
    <>
      <ColorBrowser color={color} />
+     <ColorPicker color={color} onColorUpdated={setColor}/>
```

- Let's give a try:

```bash
npm start
```

- Now we can apply the same approach for the green and blue component, we will start
  with a dirty implementation (copying & pasting the code from the red slider and updating
  it for the green and blue sliders), this approach will create a poor ColorPicker component
  (but a working one), in the next sample (08) we will refactor this to obtain a more
  maintanable component.

_./src/components/colorpicker.ts_

```diff
export const ColorPicker = (props: Props) => (
  <div>
    <input
      type="range"
      min="0"
      max="255"
      value={props.color.red}
      onChange={event =>
        props.onColorUpdated({
          red: +event.target.value,
          green: props.color.green,
          blue: props.color.blue
        })
      }
    />
    {props.color.red}
+        <br />
+        <input type="range"
+               min="0"
+               max="255"
+               value={props.color.green}
+               onChange={(event : any) => props.onColorUpdated(
+                 {
+                   red:  props.color.red,
+                   green: +event.target.value,
+                   blue: props.color.blue
+                 }
+               )}
+        />
+        {props.color.green}
+        <br />
+        <input type="range"
+               min="0"
+               max="255"
+               value={props.color.blue}
+               onChange={(event : any) => props.onColorUpdated(
+                 {
+                   red:   props.color.red,
+                   green: props.color.green,
+                   blue: +event.target.value
+                 }
+               )}
+        />
+        {props.color.blue}
+        <br />
  </div>
);
```

- Let's give a try and check the results:

```bash
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
