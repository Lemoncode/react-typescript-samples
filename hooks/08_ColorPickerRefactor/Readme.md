# 08 Colorpicker Refactor

In this example we are going to review the colorpicker component we have created and simplify it. Right now we have three slider controls with many details that make our HTML hard to read. Let's componentize this scenario.

We take _07 Colorpicker_ as reference.

# Steps to reproduce this sample

- Copy the content from _07 Colorpicker_ and execute _npm install_.

```bash
npm install
```

- In the previous example we were copying and pasting + toggling property names on the following piece of code.

_DO NOT COPY THIS_

```typescript
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
/>;
{
  props.color.red;
}
```

- We will start our refactor by componentizing this piece of code,
  let's append to the _colorPicker.tsx_ the following component
  (another approach could be to create a new file, that's a tetchty decisition,
  on one hand it makes sense to keep in the same file the slider since is quite
  related to the picker, on the other segregating in diferent files is another
  valid approach).

_./src/components/colorPicker.tsx_

**Append this to the colorPicker file**

```typescript
interface PropsColorSlider {
  value: number;
  onValueUpdated: (newValue: number) => void;
}

const ColorSliderComponent = (props: PropsColorSlider) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={event => props.onValueUpdated(+event.target.value)}
      />
      {props.value}
    </div>
  );
};
```

- Now we can simplify our ColorPicker code (first iteration...):

_./src/component/colorPicker.tsx_

```diff
export const ColorPicker = (props: Props) => (
  <div>
-    <input
-      type="range"
-      min="0"
-      max="255"
-      value={props.color.red}
-      onChange={event =>
-        props.onColorUpdated({
-          red: +event.target.value,
-          green: props.color.green,
-          blue: props.color.blue
-        })
-      }
-    />
-    {props.color.red}
+        <ColorSliderComponent
+          value = {props.color.red}
+          onValueUpdated={(value) => props.onColorUpdated(
+            {
+              red: value,
+              green: props.color.green,
+              blue:  props.color.blue
+            })
+          }
+        />
    <br />
-    <input
-      type="range"
-      min="0"
-      max="255"
-      value={props.color.green}
-      onChange={(event: any) =>
-        props.onColorUpdated({
-          red: props.color.red,
-          green: event.target.value,
-          blue: props.color.blue
-        })
-      }
-    />
-    {props.color.green}
+        <ColorSliderComponent
+          value = {props.color.green}
+          onValueUpdated={(value) => props.onColorUpdated(
+            {
+              red:  props.color.red,
+              green: value,
+              blue: props.color.blue
+            })
+          }
+        />
    <br />
-    <input
-      type="range"
-      min="0"
-      max="255"
-      value={props.color.blue}
-      onChange={(event: any) =>
-        props.onColorUpdated({
-          red: props.color.red,
-          green: props.color.green,
-          blue: event.target.value
-        })
-      }
-    />
-    {props.color.blue}
+        <ColorSliderComponent
+          value = {props.color.blue}
+          onValueUpdated={(value) => props.onColorUpdated(
+            {
+              red:   props.color.red,
+              green: props.color.green,
+              blue: value
+            })
+          }
+        />
    <br />
  </div>
);
```

- Let's check that we haven't broken anything.

```bash
npm start
```

- Not bad, we saved some lines of code and by adding using _ColorSliderComponent_ it's
  easier to read the content of the \_ColorPicker. Let's keep on refactoring the code.

- Second iteration: We have still room for improvement. What about using a single handler for all colors? If we currify the colorupdated handler, then we can!

_./src/component/colorPicker.tsx_

```diff
+ const updateColor = (props : Props, colorId : keyof Color) => (value) => {  // keyof Color ensures only 'red', 'blue' or 'green' can be passed in.
+    props.onColorUpdated({
+      ...props.color,   // this creates a clone of the current props.color object...
+      [colorId]: value  // ... which gets one of its properties (colorId) immediately replaced by a new value.
+    });
+ };

export const ColorPicker = (props: Props) => {
  return (
    <div>
      <ColorSliderComponent
      value = {props.color.red}
+      onValueUpdated={updateColor(props, 'red')}
-      onValueUpdated={(value) => props.onColorUpdated(
-        {
-          red: value,
-          green: props.color.green,
-          blue:  props.color.blue
-        })
-      }
    />
    <br />
    <ColorSliderComponent
      value = {props.color.green}
+      onValueUpdated={updateColor(props, 'green')}
-      onValueUpdated={(value) => props.onColorUpdated(
-        {
-          red:  props.color.red,
-          green: value,
-          blue: props.color.blue
-        })
-      }
    />
    <br />
    <ColorSliderComponent
      value = {props.color.blue}
+      onValueUpdated={updateColor(props, 'blue')}
-      onValueUpdated={(value) => props.onColorUpdated(
-        {
-          red:   props.color.red,
-          green: props.color.green,
-          blue: value
-        })
-      }
    />
    <br />
    </div>
  );
}
```

- Now we got a great result!! We have enhanced code quality in our component.

```bash
npm start
```

- Could we go one step further refactoring? The answer is yes, could it be worth? That's
  worth a discussion, sometimes is a good idea to keep on refactoring, and then rollback
  one step, let's apply the following trick, let's replace our color picker with this code:

_./src/component/colorPicker.tsx_

```typescript
export const ColorPicker = (props: Props) => (
  <>
    {Object.keys(props.color).map((field: keyof Color) => (
      <ColorSliderComponent
        key={field}
        value={props.color[field]}
        onValueUpdated={updateColor(props, field)}
      />
    ))}
  </>
);
```

> Excercise: evaluate what this code does, is this code worth? what issues could you find
> in the future? What would happend if we add new fields to the color entity?

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

