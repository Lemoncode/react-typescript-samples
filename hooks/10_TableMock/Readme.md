# 10 Table mock

In this sample we are going to show a table with mock data.

We will simulate that this method is calling an ajax api (it will return a promise),
by doing this we can check how easy is to replace it by a real call in the next
example.

# Steps to reproduce the sample

- We will take as starting point sample _09 sidebar_, let's copy the content from this
  sample and execute _npm install_.

```bash
npm install
```

- Let's define a model entity in _src/model/member.ts_:

_./src/model/member.ts_

```javascript
export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}
```

> Excercise: model is starting to grow, couldn't it be a good idea to add a barrel _index_ file
> under the _model_ folder, let's do that.

- Let's create our fake api.

_./src/api/memberApi.ts_

```typescript
import { MemberEntity } from "../model/member";

export const getMembersCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1457912,
            login: "brauliodiez",
            avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
          },
          {
            id: 4374977,
            login: "Nasdan",
            avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
          }
        ]),
      500
    );
  });

  return promise;
};
```

> Using promises means you are going to use ES6 or you are going to include a
> polyfill to provide compatibility on ES5 (need to install the polifyll and
> include it your webpack entry point).

- Let's jump into the ui side, to create the table component we are going to follow
  a progressive approach:

1. Create the table component but just only display the names of the members that we
   get back.
2. Create the table itself, it would look a bit messy.
3. Time to refactor, let's create a row component that will hold the row element,
   and check if it's worth to break into a header and body component.
4. Excercise: Some developer preffer to create this child components as function
   method in the main component, to avoid having a mess of properties, do you think
   is a good idea? Try to give a try and check the pros and cons.

- Let's create our first version of _memberTableComponent_.

_./src/components/memberTable.tsx_

```tsx
import * as React from "react";
import { MemberEntity } from "../model/member";
import { getMembersCollection } from "../api/memberApi";

const useMemberCollection = () => {
  const [memberCollection, setMemberCollection] = React.useState<
    MemberEntity[]
  >([]);

  const loadMemberCollection = () => {
    getMembersCollection().then(memberCollection =>
      setMemberCollection(memberCollection)
    );
  };

  return { memberCollection, loadMemberCollection };
};

export const MemberTableComponent = () => {
  const { memberCollection, loadMemberCollection } = useMemberCollection();

  React.useEffect(() => {
    loadMemberCollection();
  }, []);

  return (
    <>
      {memberCollection.map(member => (
        <h1 key={member.id}>{member.login}</h1>
      ))}
    </>
  );
};
```

In this component we are doing many things:

- First we have created a custom hook to encapsulate the getter to memberCollection and
  the loadMemberCollection call to the api, by doing this code is more maintenable plus
  is a potential effect to be reused in other components.

- We just use the custom hook that we have create in the component.

- To invoke the loadMemberCollection on a similar event as _componentDidMount_
  we invoke _React.useEffect_ passing as a second parameter and empty array _[]_
  we are telling react only to execute this effect when the component is mounted
  (if not it would call on each update), from the React hooks docs:

https://reactjs.org/docs/hooks-effect.html

_If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the inputs array always works. While passing [] is closer to the familiar componentDidMount and componentWillUnmount mental model, we suggest not making it a habit because it often leads to bugs, as discussed above. Don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem._

- Let's include it in the components barrel.

_./src/components/index.ts_

```diff
export * from "./hello";
export * from "./nameEdit";
export * from "./colorBrowser";
export * from "./colorPicker";
export * from "./sidebar";
+ export * from './memberTable';
```

- Let's instantiate this component into the app:

First we import it

```diff
import * as React from "react";
import {
  HelloComponent,
  NameEditComponent,
  ColorBrowser,
  ColorPicker,
-  SidebarComponent
+  SidebarComponent,
+  MemberTableComponent,
} from "./components";
import { Color } from "./model/color";

```

Then add it to the markup section

_./src/app.tsx_

```diff
  return (
    <>
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">
              2001: a space odyssey
            </a>
          </li>
        </ul>
      </SidebarComponent>
+     <MemberTableComponent/>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
```

- Let's run the application and check that we are getting the list of member names.

```bash
npm start
```

- Time to start building our table layout, first iteration.

_./src/components/memberTable.tsx_

```diff
  return (
    <>
+      <table>
+        <thead>
+    <tr>
+        <th>
+            Avatar
+        </th>
+        <th>
+            Id
+        </th>
+        <th>
+            Name
+        </th>
+    </tr>
+        </thead>
+        <tbody>
      {memberCollection.map(member => (
-        <h1 key={member.id}>{member.login}</h1>
+        <tr>
+          <td>
+            <img src={member.avatar_url} style ={{maxWidth: '10rem'}}/>
+          </td>
+          <td>
+            <span>{member.id}</span>
+          </td>
+          <td>
+            <span>{member.login}</span>
+          </td>
+        </tr>
      ))}
+       </tbody>
+     </table>
    </>
  );

```

- If we run the application we can check that the table is displayed, but... the code
  is hard to read.

```bash
npm start
```

- Let's componentize this, we could create a _MemberRowComponent_

_./src/components/memberTable.tsx_

```diff
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {memberCollection.map(member => (
+            <MemberRow key={member.id} member={member}/>
-            <tr>
-              <td>
-                <img src={member.avatar_url} style={{ maxWidth: "10rem" }} />
-              </td>
-              <td>
-                <span>{member.id}</span>
-              </td>
-              <td>
-                <span>{member.login}</span>
-              </td>
-            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

+ const MemberRow = ({member} : {member : MemberEntity}) =>
+        <tr>
+          <td>
+            <img src={member.avatar_url} style={{ maxWidth: "10rem" }} />
+          </td>
+          <td>
+            <span>{member.id}</span>
+          </td>
+          <td>
+            <span>{member.login}</span>
+          </td>
+        </tr>
```

> Excercise: we could go further with the refactoring, what about creating a
> _TableHeaderComponent_ component and a _tableBodyComponent_ ?

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
