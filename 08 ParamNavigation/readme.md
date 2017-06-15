# 08 ParamNavigation

In this sample we will edit a given member, here we learn how to add params to a navigation link and how to obtain them from a component.

Also, we are adding validations:

* Login: required, must be a string (at least length 3).

We will take a startup point sample _07 Form_.

Summary steps:

- Update `About` component content.
- Add route to `edit member`.
- Update `MemberRow`component.
- Add `fetchMemberById` method in member API.
- Update `Member Page`component.
- Install `lc-form-validation`.
- Add validations to `MemberForm`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `07 Form` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `08 ParamNavigation` highlights. You can see updates in `./src/components/about.tsx`.

- Add route to `edit member`:

### ./src/router.tsx
```diff
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
import { About, MembersPage, MemberPageContainer } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
        <Route path="/member" component={MemberPageContainer} />
+       <Route path="/member/:id" component={MemberPageContainer} />
      </Route>
    </Router>
  );
}

```

- Update `MemberRow`component:

### ./src/components/members/memberRow.tsx
```diff
import * as React from 'react';
+ import { Link } from 'react-router';
import { MemberEntity } from '../../model';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.StatelessComponent<Props> = ({ member }) => {
  return (
    <tr>
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
-       <span>{member.id}</span>
+       <Link
+         to={`/member/${member.id}`}
+       >
+         {member.id}
+       </Link>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
};

```

- Add `fetchMemberById` method in member API:

### ./src/api/member/index.ts
```diff
...

const insertMember = (member: MemberEntity) => {
  member.id = mockMembers.length;

  mockMembers = [
    ...mockMembers,
    member,
  ];
};

+ export const fetchMemberById = (id: number): Promise<MemberEntity> => {
+   const member = mockMembers.find(m => m.id === id);

+   return Promise.resolve(member);
+ }

export const memberAPI = {
  fetchMembers,
  fetchMembersAsync,
  saveMember,
+ fetchMemberById,
};

```

- Update `Member Page`component to accept params:

### ./src/components/member/pageContainer.tsx
```diff
import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import { MemberPage } from './page';

+ interface Props {
+   id: string;
+ }

interface State {
  member: MemberEntity;
}

- export class MemberPageContainer extends React.Component<{}, State> {
+ export class MemberPageContainer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      member: {
        id: -1,
        login: '',
        avatar_url: '',
      }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

+ public componentDidMount() {
+   const memberId = Number(this.props.id) || 0;
+   memberAPI.fetchMemberById(memberId)
+     .then((member) => {
+       this.setState({
+         ...this.state,
+         member,
+       });
+     });
+ }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      member: {
        ...this.state.member,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }

  private onSave() {
    memberAPI.saveMember(this.state.member)
      .then(() => {
        toastr.success('Member saved.');
        hashHistory.goBack();
      });
  }

  render() {
    return (
      <MemberPage
        member={this.state.member}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
