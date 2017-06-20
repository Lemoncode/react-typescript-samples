# 09 Redux

In this sample we will add Redux, isolated state into Redux reducers, implement load, save, basic validation cycle. This sample uses the fake api, in following samples we will call async operations and fitting them into Redux architecture.

We will take a startup point sample _08 ParamNavigation_.

Summary steps:

- Update `About` component content.
- Install `redux`,`react-redux` and `redux-thunk`.
- Move to `actions`.
- Move to `reducers`.
- Configure `store`.
- Update `components`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `08 ParamNavigation` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `09 Redux` highlights. You can see updates in `./src/components/about.tsx`.

- Install `redux` (it has its own typings), `react-redux` and typings, `redux-thunk` (it has its own typings):

 ```bash
 npm install redux react-redux redux-thunk --save
 npm install @types/react-redux --save-dev
 ```

- Update `webpack.config.js` vendors:

### ./webpack.config.js
```diff
  ...
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'toastr',
      'lc-form-validation',
+     'redux',
+     'react-redux',
+     'redux-thunk',
    ],
  ...
```

## Move to actions

- At first, we create a constants file to define all `action types`:

### ./src/common/constants/actionTypes.ts
```javascript
export const actionTypes = {
  FETCH_MEMBERS_COMPLETED: 'FETCH_MEMBERS_COMPLETED',
  FETCH_MEMBER_BY_ID_COMPLETED: 'FETCH_MEMBER_BY_ID_COMPLETED',
  UPDATE_MEMBER_FIELD: 'UPDATE_MEMBER_FIELD',
  SAVE_MEMBER: 'SAVE_MEMBER',
};

```

- Let's move `Members` events to `redux actions`. We can start creating a simple `action creator` that create a redux `action` to be consumed by `reducers`:

### ./src/components/members/actions/fetchMembers.ts
```javascript
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});

```

- Previous `action` will go to reducer to update the state. But before that, we need to use API to fetch members. To do that we are going to use [`redux-thunk`](https://github.com/gaearon/redux-thunk). It's a redux middleware to delay the dispatch action until fetch data from server.

### ./src/components/members/actions/fetchMembers.ts
```diff
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
+ import { memberAPI } from '../../../api/member';

+ export const fetchMembersAction = () => (dispatch) => {
+   memberAPI.fetchMembers()
+     .then((members) => {
+       dispatch(fetchMembersCompleted(members));
+     });
+ };

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});

```

- We `dispatch` completed `redux action` when fetch members. In a simple way, we can modify like:

### ./src/components/members/actions/fetchMembers.ts
```diff
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';

export const fetchMembersAction = () => (dispatch) => {
  memberAPI.fetchMembers()
-   .then((members) => {
-     dispatch(fetchMembersCompleted(members));
-   });
+   .then(dispatch(fetchMembersCompleted));
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});

```

- Let's move `Member` events to `actionts`. We can see that  `fetchMemberById` action is very similar to `fetchMembers`:

### ./src/components/member/actions/fetchMemberById.ts
```javascript
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';

export const fetchMemberByIdAction = (id: number) => (dispatch) => {
  memberAPI.fetchMemberById(id)
    .then(dispatch(fetchMemberByIdCompleted));
};

const fetchMemberByIdCompleted = (member: MemberEntity) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
});

```

### ./src/components/member/actions/memberFieldChange.ts
```javascript
import { FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberFormValidation } from '../memberFormValidation';

export const memberFieldChangeAction = (member: MemberEntity, fieldName: string, value: any) => (dispatch) => {
  memberFormValidation.validateField(member, fieldName, value)
    .then((fieldValidationResult) => {
      dispatch(memberFieldChangeCompleted(fieldValidationResult, value));
    });
};

export interface MemberFieldChangePayload {
  fieldValidationResult: FieldValidationResult;
  value: any;
}

const memberFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
  type: actionTypes.UPDATE_MEMBER_FIELD,
  payload: {
    fieldValidationResult,
    value,
  } as MemberFieldChangePayload,
});

```

### ./src/components/member/actions/saveMember.ts
```javascript
import { FormValidationResult } from 'lc-form-validation';
import * as toastr from 'toastr';
import { hashHistory } from 'react-router';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { memberFormValidation } from '../memberFormValidation';

export const saveMemberAction = (member: MemberEntity) => (dispatch) => {
  memberFormValidation.validateForm(member)
    .then((formValidationResult) => {
      if (formValidationResult.succeeded) {
        saveMember(member);
      }
      dispatch(saveMemberActionCompleted(formValidationResult));
    });
};

const saveMember = (member: MemberEntity) => {
  memberAPI.saveMember(member)
    .then(() => {
      toastr.success('Member saved.');
      hashHistory.goBack();
    })
    .catch(toastr.error);
};

const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
  type: actionTypes.SAVE_MEMBER,
  payload: {
    formValidationResult,
  },
});

```

## Move to reducers

- Now, it's time to update state based on previous `actions`:

### ./src/reducers/members.ts
```javascript
import { actionTypes } from '../common/constants/actionTypes';
import { MemberEntity } from '../model';

export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBERS_COMPLETED:
      return handleFetchMembersCompleted(state, action.payload);
  }

  return state;
};

const handleFetchMembersCompleted = (state: MemberEntity[], payload: MemberEntity[]) => {
  return payload;
};

```

### ./src/reducers/member.ts
```javascript
import { actionTypes } from '../common/constants/actionTypes';
import { MemberEntity } from '../model';
import { MemberFieldChangePayload } from '../components/member/actions/memberFieldChange';

const createEmptyMember = (): MemberEntity => ({
  id: -1,
  login: '',
  avatar_url: '',
});

export const memberReducer = (state = createEmptyMember(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBER_BY_ID_COMPLETED:
      return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.UPDATE_MEMBER_FIELD:
      return handleUpdateMemberField(state, action.payload);
  }

  return state;
};

const handleFetchMemberByIdCompleted = (state: MemberEntity, payload: MemberEntity): MemberEntity => {
  return payload;
};

const handleUpdateMemberField = (state: MemberEntity, payload: MemberFieldChangePayload): MemberEntity => {
  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.value,
  };
};

```

### ./src/reducers/memberErrors.ts
```javascript
import { FieldValidationResult, FormValidationResult } from 'lc-form-validation';
import { actionTypes } from '../common/constants/actionTypes';
import { MemberErrors } from '../model';
import { MemberFieldChangePayload } from '../components/member/actions/memberFieldChange';

const createEmptyMemberErrors = (): MemberErrors => ({
  login: new FieldValidationResult(),
});

export const memberReducer = (state = createEmptyMemberErrors(), action) => {
  switch (action.type) {
    case actionTypes.UPDATE_MEMBER_FIELD:
      return handleUpdateMemberField(state, action.payload);
    case actionTypes.SAVE_MEMBER:
      return handleSaveMember(state, action.payload);
  }

  return state;
};

const handleUpdateMemberField = (state: MemberErrors, payload: MemberFieldChangePayload): MemberErrors => {
  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.fieldValidationResult,
  };
};

const handleSaveMember = (state: MemberErrors, payload: FormValidationResult): MemberErrors => {
  const newMemberErrors = { ...state };

  return payload.fieldErrors.reduce((memberErrors, fieldValidationResult) => {
    memberErrors[fieldValidationResult.key] = fieldValidationResult;
    return memberErrors;
  }, newMemberErrors);
};

```

### ./src/reducers/index.ts
```javascript
import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
};

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  memberErrors: memberErrorsReducer,
});

```

- Configure `store`:

### ./src/store.ts
```javascript
import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
  )
);

```

- Update `AppRouter` to use store:

### ./src/router.tsx
```diff
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
+ import { Provider } from 'react-redux';
+ import { store } from './store';
import { App } from './app';
import { About, MembersPage, MemberPageContainer } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
+   <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
          <Route path="/member" component={MemberPageContainer} />
          <Route path="/member/:id" component={MemberPageContainer} />
        </Route>
      </Router>
+   </Provider>
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
