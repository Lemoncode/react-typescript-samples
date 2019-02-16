# 07 Colopicker

In this sample we are going to implement a color picker component, it will allow us to choose
between red / green / blue components and displaty the resulting color.

We will start with a non optimal implementation and we will refactor it in sample 09.

# Steps

- We will take as starting point sample _06 Enable_, copy the content from that project and
  exectue _npm install_

```bash
npm install
```

- The current project structure is getting a bit cluttered, let's do some quick organization.

- We will create a components folder under _src_ (_src/components_).

- Inside that components folder we will copy all the components that we have created (_nameEdit_
  and _hello.tsx_).

- We will create an _index_ file under _src/components_ and create a barrel (by doing this, later
  on we can refactor the content of the components folder without affecting other external files in
  the application that may import them).

_./src/index.tsx_

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
  and height to that rectanble, and a background color).

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

- Let's use the color browser to display that info.

_./src/app.tsx_

```diff
  return (
    <>
+      <ColorBrowser color={color}/>
      <HelloComponent userName={name} />

```

- Let's give a try and see our _ColorBrowser_ in action.
