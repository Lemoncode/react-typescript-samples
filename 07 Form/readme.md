# 07 Form

In this sample we will add a link in the members page that will navigate to a "new member page". This new page will display a form where you have to enter the avatar url, login and id of a new member (just supossing we can edit that info).

We will take a startup point sample _06 AJAX Call_.

Summary steps:

- Update `About` component content.
- Install `toastr` and typings.
- Create dummy `Member Page`.
- Add new route to `Member Page`.
- Add link for navigation.
- Create common `form components`.
- Create `MemberForm component`.
- Update `Member Page`.
- Create `Member Page container`.
- Add save method in `member API`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `06 AJAX Call` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `07 Form` highlights. You can see updates in `./src/components/about.tsx`.

- Install `toastr` and typings to show toast when save form changes:

```bash
npm install toastr --save
npm install @types/toastr --save-dev
```

- Update `webpack.config.js` vendors:

### ./webpack.config.js
```diff
...
  entry: {
    app: './index.tsx',
    appStyles: './css/site.css',
    vendor: [
      'react',
      'react-dom',
      'react-router',
+     'toastr',
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
+     '../node_modules/toastr/build/toastr.css',
    ],
    ...
  },
  ...
};

```

- Create dummy `Member Page`:

### ./src/components/member/page.tsx
```javascript
import * as React from 'react';

export const MemberPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <h2>Member Page</h2>
    </div>
  );
}

```

- And its `index.ts` file:

### ./src/components/member/index.ts
```javascript
export * from './page';

```

- Update components `index.ts` file too:

### ./src/components/index.ts
```diff
export * from './header';
export * from './about';
export * from './members';
+ export * from './member';

```

- Add new route to `Member Page`.

### ./src/router.tsx
```diff
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
- import { About, MembersPage } from './components';
+ import { About, MembersPage, MemberPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
+       <Route path="/member" component={MemberPage} />
      </Route>
    </Router>
  );
}

```

- Add link for navigation:

### ./src/components/members/page.tsx
```diff
import * as React from 'react';
+ import { Link } from 'react-router';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

...

public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
+       <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.state.members.map((member) =>
                <MemberRow member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
...

```

- It's time to build a form that will contain the data to be edited, we will define it using some special Id's to  make it easier to get the properties updated. Let's start by creating a common input component.

### ./src/common/components/form/input.tsx

```javascript
import * as React from "react";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export const Input: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChangeInput(props)}
        />
      </div>
      <div className="input">{props.error}</div>
    </div>
  )
};

const formatWrapperClass = (props: Props) => {
  const wrapperClass = 'form-group';

  return props.error ?
    `${wrapperClass} has-error` :
    wrapperClass;
};

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
};

```

### ./src/common/components/form/button.tsx

```javascript
import * as React from 'react';

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

export const Button: React.StatelessComponent<Props> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

```

- Create its `index.ts` file:

### ./src/common/components/form/index.ts
```javascript
export * from './input';
export * from './button';

```

- Create `MemberForm component`:

### ./src/components/member/memberForm.tsx
```javascript
import * as React from 'react';
import { MemberEntity } from '../../model';
import { Input, Button } from '../../common/components/form';

interface Props {
  member: MemberEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberForm: React.StatelessComponent<Props> = (props) => {
  return (
    <form>
      <h1>Manage member</h1>

      <Input
        name="login"
        label="Login"
        value={props.member.login}
        onChange={props.onChange}
      />

      <Input
        name="avatar_url"
        label="Avatar Url"
        value={props.member.avatar_url}
        onChange={props.onChange}
      />

      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  );
};

```

- Update `Member Page`:

### ./src/components/member/page.tsx
```diff
import * as React from 'react';
+ import { MemberEntity } from '../../model';
+ import { MemberForm } from './memberForm';

+ interface Props {
+   member: MemberEntity;
+   onChange: (fieldName: string, value: string) => void;
+   onSave: () => void;
+ }

- export const MemberPage: React.StatelessComponent<{}> = () => {
+ export const MemberPage: React.StatelessComponent<Props> = (props) => {
  return (
-   <div className="row">
-     <h2>Member Page</h2>
-   </div>
+   <MemberForm
+     member={props.member}
+     onChange={props.onChange}
+     onSave={props.onSave}
+   />
  );
}

```

- Create `Member Page container`:

### ./src/components/member/pageContainer.tsx
```javascript
import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberPage } from './page';

interface State {
  member: MemberEntity;
}

export class MemberPageContainer extends React.Component<{}, State> {
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
    console.log('save');
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
- Update its `index.ts` file:

### ./src/components/member/index.ts
```diff
- export * from './page';
+ export * from './pageContainer';

```

- And router:

### ./src/router.tsx
```diff
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
- import { About, MembersPage, MemberPage } from './components';
+ import { About, MembersPage, MemberPageContainer } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
-       <Route path="/member" component={MemberPage} />
+       <Route path="/member" component={MemberPageContainer} />
      </Route>
    </Router>
  );
}

```

- Add save method in `member API`:

### ./src/api/member/index.ts
```diff
import { MemberEntity } from '../../model';
import { members } from './mockData';

const baseURL = 'https://api.github.com/orgs/lemoncode';
+ let mockMembers = members;

const fetchMembers = (): Promise<MemberEntity[]> => {
- return Promise.resolve(members);
+ return Promise.resolve(mockMembers);
};

...

+ const saveMember = (member: MemberEntity): Promise<boolean> => {
+   const index = mockMembers.findIndex(m => m.id === member.id);

+   index >= 0 ?
+     updateMember(member, index) :
+     insertMember(member);

+   return Promise.resolve(true);
+ };

+ const updateMember = (member: MemberEntity, index: number) => {
+   mockMembers = [
+     ...mockMembers.slice(0, index),
+     member,
+     ...mockMembers.slice(index + 1),
+   ];
+ };

+ const insertMember = (member: MemberEntity) => {
+   member.id = mockMembers.length;

+   mockMembers = [
+     ...mockMembers,
+     member,
+   ];
+ };

export const memberAPI = {
  fetchMembers,
  fetchMembersAsync,
+ saveMember,
};

```

- Use again `fetchMembers`:

### ./src/components/members/page.tsx
```diff
...

  public componentDidMount() {
-   memberAPI.fetchMembersAsync()
+   memberAPI.fetchMembers()
      .then((members) => {
        this.setState({ members });
      });
  }

  ...
};

```

- Update `Member page` container:

### ./src/components/member/pageContainer.tsx
```diff
import * as React from 'react';
+ import { hashHistory } from 'react-router';
+ import * as toastr from 'toastr';
+ import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import { MemberPage } from './page';

...

  private onSave() {
-   console.log('save');
+   memberAPI.saveMember(this.state.member)
+     .then(() => {
+       toastr.success('Member saved.');
+       hashHistory.goBack();
+     });
  }

  ...
}

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
