# 05 Presentational Comp

In this sample we will breaking the list component into three: header, table and row components, member row entity passed via props.

We will take a startup point sample _04 DisplayData_.

Summary steps:

- Update `About` component content.
- Extract `MemberHeader` as presentational component.
- Extract `MemberRow` as presentational component.
- Update `Members Page`.

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

- Extract `MemberHeader` as presentational component:

### ./src/components/members/memberHeader.ts
```javascript
import * as React from 'react';

export const MemberHeader: React.StatelessComponent<{}> = () => {
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  );
};

```

- Extract `MemberRow` as presentational component:

### ./src/components/members/memberRow.ts
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

- Update `Members Page`.

### ./src/components/members/page.tsx
```diff
import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

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
          <thead>
-           {MemberHeader()}
+           <MemberHeader />
          </thead>
          <tbody>
-           {this.state.members.map(MemberRow)}
+           {
+             this.state.members.map((member) =>
+               <MemberRow
+                 key={member.id}
+                 member={member}
+               />
+             )
+           }
          </tbody>
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

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us.
