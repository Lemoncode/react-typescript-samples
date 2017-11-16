# 05 Presentational Comp

In this sample we will breaking the list component into three: header, table and row components, member row entity passed via props.

We will take a startup point sample _04 DisplayData_.

Summary steps:

- Update package.json dependencies.
- Update `About` component content.
- Extract `MemberHeader` as presentational component.
- Extract `MemberRow` as presentational component.
- Extract `MemberBody` as presentational component.
- Update `Members Page`.
- Update `Router`.
- Update `Header` component.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `04 DisplayData` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `05 Presentational Comp` highlights. You can see updates in `./src/components/about.tsx`.

- Update package.json dependencies:
```diff
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
      "jquery": "^3.2.1",
-    "react": "^15.5.4",
-    "react-dom": "^15.5.4",
-    "react-router": "^3.0.5"
+    "react": "^16.0.0",
+    "react-dom": "^16.0.0",
+    "react-router-dom": "^4.2.2"
    },
    "devDependencies": {
-    "@types/react": "^15.0.27",
-    "@types/react-dom": "^15.5.0",
-    "@types/react-router": "^3.0.11",
+    "@types/react": "^16.0.20",
+    "@types/react-dom": "^16.0.2",
+    "@types/react-router-dom": "^4.2.0",
      "awesome-typescript-loader": "^3.1.3",
      "babel-core": "^6.25.0",
      "babel-preset-env": "^1.5.2",
      "css-loader": "^0.28.4",
-    "file-loader": "^0.11.2",
+    "file-loader": "^1.1.5",
      "html-webpack-plugin": "^2.28.0",
-    "style-loader": "^0.18.2",
+    "style-loader": "^0.19.0",
      "typescript": "^2.3.4",
-    "url-loader": "^0.5.9",
-    "webpack": "^2.6.1",
+    "url-loader": "^0.6.2",
+    "webpack": "^3.8.1",
      "webpack-dev-server": "^2.4.5"
  }
}
```

- Extract `MemberHeader` as presentational component:

### ./src/components/members/memberHeader.tsx
```javascript
import * as React from 'react';

export const MemberHeader: React.StatelessComponent<{}> = () => {
  return (
    <thead>
      <tr>
        <th>Avatar</th>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
  );
};

```

- Extract `MemberRow` as presentational component:

### ./src/components/members/memberRow.tsx
```javascript
import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.StatelessComponent<Props> = ({member}) => {
  return (
      <tr>
        <td>
          <img src={member.avatar_url} className="avatar" />
        </td>
        <td>
          <span>{member.id}</span>
        </td>
        <td>
          <span>{member.login}</span>
        </td>
      </tr>
  );
};

```

- Extract `MemberBody` as presentational component:

### ./src/components/members/memberBody.tsx
```javascript
import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberRow } from './memberRow';

interface Props {
    members: MemberEntity[];
}

export const MemberBody: React.StatelessComponent<Props> = ({ members }) => {
    return (
        <tbody>
            {
                members.map((member) =>
                    <MemberRow
                        key={member.id}
                        member={member}
                    />
                )
            }
        </tbody>
    );
}

```

- Update `Members Page`.

### ./src/components/members/page.tsx
```diff
import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
-import { MemberHeader } from './memberHeader';
-import { MemberRow } from './memberRow';
+import { MemberHeader } from './memberHeader';
+import { MemberBody } from './memberBody';

interface State {
  members: MemberEntity[];
}

export class MembersPage extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = { members: [] };
  }

  public componentDidMount() {
    memberAPI.fetchMembers()
      .then((members) => {
        this.setState({ members });
      });
  }

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
-           <thead>
-           {MemberHeader()}
-           </thead>
-           <tbody>
-           {this.state.members.map(MemberRow)}
-           </tbody>
+           <MemberHeader/>
+           <MemberBody
+             members={this.state.members} />
        </table>
      </div>
    );
  }
};

- const MemberHeader = () => {
-   return (
-     <tr>
-       <th>Avatar</th>
-       <th>Id</th>
-       <th>Name</th>
-     </tr>
-   );
- }

- const MemberRow = (member: MemberEntity) => {
-   return (
-     <tr key={member.id}>
-       <td>
-         <img src={member.avatar_url} className="avatar" />
-       </td>
-       <td>
-         <span>{member.id}</span>
-       </td>
-       <td>
-         <span>{member.login}</span>
-       </td>
-     </tr>
-   )
- }

```
- Update `Router`.

### ./src/router.tsx
```diff
import * as React from 'react';
-import { Router, Route, IndexRoute, hashHistory } from 'react-router';
+import { Route, HashRouter} from 'react-router-dom';
import { App } from './app';
import { About, MembersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
-     <Router history={hashHistory}>
+     <HashRouter>
-       <Route path="/" component={App} >
+       <App>
-         <IndexRoute component={About} />
+         <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
-       </Route>
+       </App>
-     </Router>
+     </HashRouter>
  );
}

```

- Update `Header` component.
```diff
import * as React from 'react';
-import { Link } from 'react-router';
+import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/members">Members</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us.
