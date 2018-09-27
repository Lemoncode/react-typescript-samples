# 14 Async Calls with Redux Saga
In this guide we will be showing how to implement the data feeding using [redux-saga](https://redux-saga.js.org/)

To do this, we will take as an startup point sample _10 LoaderSpinner_.

Summary steps:

- Install Redux-saga
- Prepare Redux to allow saga:
  - Create new actions
  - Update page containers
  - Update reducers
- Configure redux store to use Saga
- Create sagas
- Execute the example

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v8.11.3) if they are not already
installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `10 LoaderSpinner` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```
- We also need to install [redux-saga](https://redux-saga.js.org/)

```bash
$ npm install redux-saga --save
```

## Prepare Redux to allow saga

To use saga, we will setup components needed for redux. That means creating/updating the files for actions, reducers and containers.
 ### Create new actions

 We will create a new action to fetch members via saga.
 First we will include this actions on our constants file `/src/common/contants/actionsTypes.ts`
 ```diff
 export const actionTypes = {
-  FETCH_MEMBERS_COMPLETED: 'FETCH_MEMBERS_COMPLETED',
  FETCH_MEMBER_BY_ID_COMPLETED: 'FETCH_MEMBER_BY_ID_COMPLETED',
  UPDATE_MEMBER_FIELD: 'UPDATE_MEMBER_FIELD',
  SAVE_MEMBER: 'SAVE_MEMBER',
  FETCH_REPOSITORIES_COMPLETED:'FETCH_REPOSITORIES_COMPLETED',
+  FETCH_MEMBER_REQUEST : 'FETCH_MEMBER_REQUEST',
};
```

>FETCH_MEMBERS_COMPLETED: 'FETCH_MEMBERS_COMPLETED', is removed because this action would not be used since we want to use saga.

### Update Page Container

### `/src/components/members/pageContainer.tsx`
```diff
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
- import { fetchMembersAction, fetchRepositoriesAction } from './actions';
+ import { fetchMembersAction, fetchRepositoriesAction} from './actions';
import { MembersPage } from './page';

...

const mapDispatchToProps = (dispatch) => ({
+  fetchMembers: () => dispatch(fetchMembersAction()),
-  fetchMembers: () => dispatch(fetchMembersAction()),
  fetchRepos: () =>dispatch(fetchRepositoriesAction()),
});

```

>We call the action with the same name, so there's no real change, but it's for you to notice that in case a new action was created, it should be called here.

### Update reducers

### `/src/components/members/actions/fetchMembers.ts`

We will redo this file with the new action created for this saga.

```ts
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { trackPromise } from 'react-promise-tracker';

export const fetchMembersAction = () => (dispatch) => {
  trackPromise(
    memberAPI.fetchMembersAsync()
    .then((members) => {
      dispatch(fetchMembersActionSaga(members));
    })
  );
};

export const fetchMembersActionSaga = (members: MemberEntity[]) => (
  {
    type: actionTypes.FETCH_MEMBER_REQUEST,
    payload: members,
  }
);
```

Now that we are done with the redux side, lets create our saga. Our first step will be to include saga in our store.
### Configure redux store to use Saga
We will need to include Saga to our store file `/src/store.tsx`.

```diff 
import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
+import createSagaMiddleware from 'redux-saga';

+const sagaMiddleware = createSagaMiddleware();

export const store: Store<State> = createStore(
  state,
  compose(
-    applyMiddleware(reduxThunk),
+    applyMiddleware(reduxThunk, sagaMiddleware),
  )
);
```
We'll need to come back to this file later when our saga files are ready, so let's create our sagas.

### Create sagas

This are the key files for our program. As you probably know by now, saga uses generators to work. This time we will divide them in 2 different files. One that will work as a "_demon_" that when prompted will _"do the job"_.

For this will make a folder in `/src/sagas` and will create a file called `membersSaga.tsx`

### `/src/sagas/membersSaga.tsx`
```ts

import "regenerator-runtime/runtime";
import { call, put } from 'redux-saga/effects';
import {memberAPI} from '../api/member';
import {fetchMembersActionSaga} from '../components/members/actions';
import {MemberEntity} from '../model/memberEntity';

// worker Saga: will be fired on LOAD_MEMBERS_REQUESTED actions
export function* fetchMembers() {
    let members: Array<MemberEntity>;
    members = yield call(memberAPI.fetchMembersAsync);
    yield put(fetchMembersActionSaga(members));
}

```
>Notice here, how we create a new threat and wait for the API call and how we also invoke the new action to feed our code with a new member list.

This code will be called by our "_demon_" `membersSagaWatcher.ts`

### `/src/sagas/membersSagaWatcher.ts`

```ts
import { fork, all, takeLatest} from 'redux-saga/effects';
import { fetchMembers } from './membersSaga';
import {actionTypes} from '../common/constants/actionTypes';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembersRequest() {
       while (true){
        yield takeLatest(actionTypes.FETCH_MEMBER_REQUEST, fetchMembers);
       }
}
// Register all your watchers
export default function* root() {
    yield all([
        fork(watchLoadMembersRequest),
    ])
}
```

Here, `all` will execute all our watcher in a similar way to `promise.all` does with promises.

The "shocking" `while (true)` is responsible for keeping our "`demon`" alive. On the other hand, `takeLastest` will be the one "calling" our action and invoking our recently created saga generator.

The last thing we have left it's to complete our store to make sure it uses our sagas.

### `/src/store.ts`

```diff
import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
import createSagaMiddleware from 'redux-saga';
+import membersSagaWatcher from './sagas/membersSagaWatcher';

const sagaMiddleware = createSagaMiddleware();

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk, sagaMiddleware),
  )
);
+  sagaMiddleware.run(membersSagaWatcher);
```
## Execute the example:

Finally, lets give it a try:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
