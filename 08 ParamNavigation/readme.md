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

+ const fetchMemberById = (id: number): Promise<MemberEntity> => {
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
+   params: { id: string };
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
+   const memberId = Number(this.props.params.id) || 0;
+   memberAPI.fetchMemberById(memberId)
+     .then((member) => {
+       this.setState({
+         ...this.state,
+         member,
+       });
+     });
+ }

  ...

```

- Now, it's time to add validations. We are going to install [`lc-form-validation`](https://github.com/Lemoncode/lcFormValidation)

```bash
npm install lc-form-validation --save
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
      'toastr',
+     'lc-form-validation',
    ],
    ...
  },
  ...
};

```

- Let's create an entity that will hold the form errors:

### ./src/model/memberErrors.ts
```javascript
import { FieldValidationResult } from 'lc-form-validation';

export interface MemberErrors {
  login: FieldValidationResult;
}

```

### ./src/model/index.ts
```diff
export * from './memberEntity';
+ export * from './memberErrors';

```

- Create member form validations:

### ./src/components/member/memberFormValidation.ts
```javascript
import {
  Validators, ValidationConstraints, createFormValidation
} from 'lc-form-validation';

const validationConstraints: ValidationConstraints = {
  fields: {
    login: [
      { validator: Validators.required },
      {
        validator: Validators.minLength,
        customParams: { length: 3 },
      },
    ]
  },
};

export const memberFormValidation = createFormValidation(validationConstraints);

```

- Update `Member page container`:

### ./src/components/member/pageContainer.tsx
```diff
import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
+ import { FieldValidationResult } from 'lc-form-validation';
import { memberAPI } from '../../api/member';
- import { MemberEntity } from '../../model';
+ import { MemberEntity, MemberErrors } from '../../model';
+ import { memberFormValidation } from './memberFormValidation';
import { MemberPage } from './page';

interface Props {
  params: { id: string };
}

interface State {
  member: MemberEntity;
+ memberErrors: MemberErrors;
}

export class MemberPageContainer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      member: {
        id: -1,
        login: '',
        avatar_url: '',
      },
+     memberErrors: {
+       login: new FieldValidationResult(),
+     }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  public componentDidMount() {
    const memberId = Number(this.props.params.id) || 0;
    memberAPI.fetchMemberById(memberId)
      .then((member) => {
        this.setState({
          ...this.state,
          member,
        });
      });
  }

  private onFieldValueChange(fieldName: string, value: string) {
+   memberFormValidation.validateField(this.state.member, fieldName, value)
+     .then((fieldValidationResult) => {
        const nextState = {
          ...this.state,
          member: {
            ...this.state.member,
            [fieldName]: value,
          },
+         memberErrors: {
+           ...this.state.memberErrors,
+           [fieldName]: fieldValidationResult,
+         }
        };

        this.setState(nextState);
+     });
  }

  private onSave() {
+   memberFormValidation.validateForm(this.state.member)
+     .then((formValidationResult) => {
+       if (formValidationResult.succeeded) {
          memberAPI.saveMember(this.state.member)
            .then(() => {
              toastr.success('Member saved.');
              hashHistory.goBack();
            });
+       }
+     });
  }

  render() {
    return (
      <MemberPage
        member={this.state.member}
+       memberErrors={this.state.memberErrors}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}

```

- Update `Member page`:

### ./src/components/member/page.tsx
```diff
import * as React from 'react';
- import { MemberEntity } from '../../model';
+ import { MemberEntity, MemberErrors } from '../../model';
import { MemberForm } from './memberForm';

interface Props {
  member: MemberEntity;
+ memberErrors: MemberErrors;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberPage: React.StatelessComponent<Props> = (props) => {
  return (
    <MemberForm
      member={props.member}
+     memberErrors={props.memberErrors}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}

```

- Update `Member form`:

### ./src/components/member/memberForm.tsx
```diff
import * as React from 'react';
- import { MemberEntity } from '../../model';
+ import { MemberEntity, MemberErrors } from '../../model';
import { Input, Button } from '../../common/components/form';

interface Props {
  member: MemberEntity;
+ memberErrors: MemberErrors;
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
+       error={
+         props.memberErrors.login.succeeded ?
+           '' :
+           props.memberErrors.login.errorMessage
+       }
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

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
