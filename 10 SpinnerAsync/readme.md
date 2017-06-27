# 10 SpinnerAsync

In this sample we will display a busy indicator when an ajax request is in progress.

We will take a startup point sample _09 Redux_.

Summary steps:

- Update `About` component content.
- Create `http` actions and middleware.
- Create `http` reducer.
- Configure `store`.
- Add `spinner` image and configure `webpack`.
- Create `Spinner` component.
- Dispatch `http` actions in necessary `thunk` actions.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `09 Redux` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `10 SpinnerAsync` highlights. You can see updates in `./src/components/about.tsx`.

- Create `http` actions and middleware:

### ./src/middlewares/http/actionTypes.ts
```javascript
export const actionTypes = {
  HTTP_CALL_START: 'HTTP_CALL_START',
  HTTP_CALL_END: 'HTTP_CALL_END',
};

```

### ./src/middlewares/http/actions.ts
```javascript
import { actionTypes } from './actionTypes';

export const httpCallStartAction = () => ({
  type: actionTypes.HTTP_CALL_START,
});

export const httpCallEndAction = () => ({
  type: actionTypes.HTTP_CALL_END,
});

```

### ./src/middlewares/http/middleware.ts
```javascript
import { httpCallEndAction } from './actions';

export const httpMiddleware = ({ dispatch }) => (next) => (action) => {
  return dispatchHttpCallEndAction(dispatch, next, action);
};

const dispatchHttpCallEndAction = (dispatch, next, action) => {
  const httpEnd = action.meta && action.meta.httpEnd;

  if (!httpEnd) {
    return next(action);
  }
  else {
    const nextAction = cleanAction(action);
    next(nextAction);
    return dispatch(httpCallEndAction());
  }
};

const cleanAction = (action) => ({
  ...action,
  meta: {
    ...action.meta,
    httpEnd: null,
  },
});

```

### ./src/middlewares/index.ts
```javascript
export * from './http/middleware';

```

- Create `http` reducer:

### ./src/reducers/http.ts
```javascript
import { actionTypes } from '../middlewares/http/actionTypes';

export interface HttpState {
  callCount: number;
  inProgress: boolean;
}

const newState = (): HttpState => ({
  callCount: 0,
  inProgress: false,
});

export const httpReducer = (state = newState(), action) => {
  switch (action.type) {
    case actionTypes.HTTP_CALL_START:
      return handleHttpCallStart(state, action.payload);
    case actionTypes.HTTP_CALL_END:
      return handleHttpCallEnd(state, action.payload);
  }

  return state;
}

const handleHttpCallStart = (state: HttpState, payload): HttpState => ({
  callCount: state.callCount + 1,
  inProgress: true,
});

const handleHttpCallEnd = (state: HttpState, payload): HttpState => {
  const callCount = state.callCount - 1;

  return {
    callCount,
    inProgress: callCount > 0,
  };
};

```

- Update `index.ts` reducer file:

### ./src/reducers/index.ts
```diff
import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';
+ import { httpReducer, HttpState } from './http';

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
+ http: HttpState;
};

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  memberErrors: memberErrorsReducer,
+ http: httpReducer,
});

```

- Configure `store`:

### ./src/store.ts
```diff
import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
+ import { httpMiddleware } from './middlewares';
import { state, State } from './reducers';

+ const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

+ const middlewares = [
+   reduxThunk,
+   httpMiddleware,
+ ];

export const store: Store<State> = createStore(
  state,
- compose(
+ composeEnhancers(
-   applyMiddleware(reduxThunk),
+   applyMiddleware(...middlewares),
  ),
);

```

- With `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` we can check if we have installed [`Redux dev-tools extension`](https://github.com/zalmoxisus/redux-devtools-extension).

- Add `spinner` image and configure `webpack`:

### ./src/images/spinner.gif

### ./webpack.config.js
```diff
...
module: {
    rules: [
      ...
+     {
+       test: /\.(gif|jpg|png)$/,
+       include: path.join(basePath, "src/images"),
+       loader: 'url-loader?limit=100000'
+     }
    ],
  },
  ...
```

- Create `Spinner` component:

### ./src/common/components/spinner/spinner.tsx
```javascript
import * as React from 'react';

interface Props {
  showSpinner: boolean;
}

export const SpinnerComponent: React.StatelessComponent<Props> = (props) => {
  return (
    props.showSpinner ?
      <div>
        <div className="spinnerOverlay" />
        <div className="spinner">
          <span>Loading...</span>
        </div>
      </div> :
      null
  );
};

```

### ./src/common/components/spinner/spinnerContainer.tsx
```javascript
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { SpinnerComponent } from './spinner';

const mapStateToProps = (state: State) => ({
  showSpinner: state.http.inProgress,
});

export const SpinnerContainer = connect(
  mapStateToProps,
)(SpinnerComponent);

```

### ./src/common/components/spinner/index.ts
```javascript
export * from './spinnerContainer';

```

- Add styles:

### ./src/css/site.css
```diff
.avatar {
   max-width: 80px
}

+ .spinnerOverlay {
+   position: fixed;
+   z-index: 40001;
+   left: 0;
+   width: 100%;
+   height: 100%;
+   background-color: rgba(0, 0, 0, 0.5);
+ }

+ .spinner {
+   position: fixed;
+   z-index: 40002;
+   width: 100px;
+   height: 100px;
+   top: 50%;
+   left: 50%;
+   background: url('../images/spinner.gif') no-repeat center #fff;
+   text-align: center;
+   padding: 10px;
+   border-radius: 15px;
+   border: 1px solid #666;
+   margin-left: -50px;
+   margin-top: -50px;
+ }

```

- Use `Spinner` component:

### ./src/app.tsx
```diff
import * as React from 'react';
import { Header } from './components';
+ import { SpinnerContainer } from './common/components/spinner';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
+     <SpinnerContainer />
      <Header />
      {props.children}
    </div>

  );
}

```

- Dispatch `http` actions in necessary `thunk` actions.

### ./src/components/members/actions/fetchMembers.ts
```diff
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
+ import { httpCallStartAction } from '../../../middlewares/http/actions';

export const fetchMembersAction = () => (dispatch) => {
+ dispatch(httpCallStartAction());
  memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    });
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
+ meta: {
+   httpEnd: true,
+ },
});

```

### ./src/components/member/actions/fetchMemberById.ts
```diff
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
+ import { httpCallStartAction } from '../../../middlewares/http/actions';

export const fetchMemberByIdAction = (id: number) => (dispatch) => {
+ dispatch(httpCallStartAction());
  memberAPI.fetchMemberById(id)
    .then((member) => {
      dispatch(fetchMemberByIdCompleted(member));
    });
};

const fetchMemberByIdCompleted = (member: MemberEntity) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
+ meta: {
+   httpEnd: true,
+ },
});

```

### ./src/components/member/actions/saveMember.ts
```diff
import { FormValidationResult } from 'lc-form-validation';
import * as toastr from 'toastr';
import { hashHistory } from 'react-router';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { memberFormValidation } from '../memberFormValidation';
+ import { httpCallStartAction } from '../../../middlewares/http/actions';

export const saveMemberAction = (member: MemberEntity) => (dispatch) => {
  memberFormValidation.validateForm(member)
    .then((formValidationResult) => {
      if (formValidationResult.succeeded) {
+       dispatch(httpCallStartAction());
        saveMember(member);
      }
      dispatch(saveMemberActionCompleted(formValidationResult));
    });
};

...

const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
  type: actionTypes.SAVE_MEMBER,
  payload: formValidationResult,
+ meta: {
+   httpEnd: true,
+ },
});

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
