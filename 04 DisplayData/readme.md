# 04 DisplayData

In this sample we will create a read only list component (table >> tr >> td), reading list of members
from a fake API and dumping it into component state.

We will take a startup point sample _03 Navigation_.

Summary steps:

- Update `About` component content.
- Create `Member model`.
- Create member `API`.
- Update `Members Page`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `03 Navigation` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `04 DisplayData` highlights. You can see updates in `./src/components/about.tsx`.

- Create `model`:

### ./src/model/memberEntity.ts
```javascript
export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

```

- And its `index.ts`:

### ./src/model/index.ts
```javascript
export * from './memberEntity';

```

- Create `mock data`:

### ./src/api/member/mockData.ts
```javascript
import { MemberEntity } from '../../model';

export const members: MemberEntity[] =
  [
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
  ];

```
- Create `API`:

### ./src/api/member/index.ts
```javascript
import { MemberEntity } from '../../model';
import { members } from './mockData';

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};

```

- Update `Members Page`:

### ./src/components/members/page.tsx
```diff
import * as React from 'react';
+ import { MemberEntity } from '../../model';
+ import { memberAPI } from '../../api/member';

+ interface State {
+   members: MemberEntity[];
+ }

- export const MembersPage: React.StatelessComponent<{}> = () => {
-   return (
-     <div className="row">
-       <h2> Members Page</h2>
-     </div>
-   );
- }

+ export class MembersPage extends React.Component<{}, State> {
+   constructor() {
+     super(null);
+     this.state = { members: [] };
+   }

+   public componentDidMount() {
+     memberAPI.fetchMembers()
+       .then((members) => {
+         this.setState({ members });
+       });
+   }

+   public render() {
+     return (
+       <div className="row">
+         <h2> Members Page</h2>
+         <table className="table">
+           <thead>
+             {MemberHeader()}
+           </thead>
+           <tbody>
+             {this.state.members.map(MemberRow)}
+           </tbody>
+         </table>
+       </div>
+     );
+   }
+ };

+ const MemberHeader = () => {
+   return (
+     <tr>
+       <th>Avatar</th>
+       <th>Id</th>
+       <th>Name</th>
+     </tr>
+   );
+ }

+ const MemberRow = (member: MemberEntity) => {
+   return (
+     <tr key={member.id}>
+       <td>
+         <img src={member.avatar_url} className="avatar" />
+       </td>
+       <td>
+         <span>{member.id}</span>
+       </td>
+       <td>
+         <span>{member.login}</span>
+       </td>
+     </tr>
+   )
+ }

```

- Update `css`:

### ./src/css/site.css
```diff
.navbar .nav .active, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus{
  background: #e7e7e7 !important;
  color: #333 !important;
}

+ .avatar {
+    max-width: 80px
+ }

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us.
