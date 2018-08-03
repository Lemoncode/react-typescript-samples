# 09 Redux

In this sample we will be using [react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) to display a loding spinner while loading on asynchronous calls.
To do so we will take as an startup point sample _09 Redux_.

Summary steps:

- Install [react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) 
- Create a common component for a spinner
- Create a CSS to make the spinner looks good.
- Add HOC react-promise-tracker to the component
- Update actions to use [react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) by wraping asynchronous calls. 

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
- We also need to install [react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker).

```bash
$ npm install react-promise-tracker --save
```

## Create a Spinner component

First, lets create a new folder to hold the component and its relative files.
### ./src/common/spinner/loadingSpinner.tsx

This componnet will display the spinner.

```tsx
import * as React from 'react';
import './loadingSpinner.css';

import PropTypes from 'prop-types';


const InnerLoadingSpinerComponent:React.StatelessComponent<PropTypes> = (props) => {
   if (props.trackedPromiseInProgress === true) {
    return (
      <div className="loading">
        <div className="loading__background">
          <div className="loading__backdrop">
            <div className="loading__box">
              <div className="loading__icon"></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else { return null } 
}

 InnerLoadingSpinerComponent.propTypes = {
  trackedPromiseInProgress: PropTypes.bool.isRequired,
} 


```

We will also add a CSS file to povide some style to our spinner:

### ./src/common/spinner/loadingSpinner.css
```css
.loading__background {
	position: fixed;
	width: 100%;
	top: 0px;
	bottom: 0px;
	z-index: 1070;
}

.loading__backdrop {
	height: 100%;
	background-color: #000;
	opacity: 0.5;
}

.loading__box {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.loading__icon {
	position: relative;
	width: 200px;
	height: 200px;
	border: 20px solid #868e96;
	border-top-color: #007bff;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

```

Now that we have created our component, we will need to use the HOC provided by [react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) to wrap the component.
### ./src/common/spinner/loadingSpinner.tsx

```diff
import * as React from 'react';
import './loadingSpinner.css';
+ import { promiseTrackerHoc } from 'react-promise-tracker';
import PropTypes from 'prop-types';


const InnerLoadingSpinerComponent:React.StatelessComponent<PropTypes> = (props) => {
   if (props.trackedPromiseInProgress === true) {
    return (
      <div className="loading">
        <div className="loading__background">
          <div className="loading__backdrop">
            <div className="loading__box">
              <div className="loading__icon"></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else { return null } 
}

 InnerLoadingSpinerComponent.propTypes = {
  trackedPromiseInProgress: PropTypes.bool.isRequired,
} 
+ export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);

```

We will also need to create a barrel to ease the access to the spinner component.

### ./src/common/spinner/index.ts


```ts
export {LoadingSpinnerComponent} from './loadingSpinner';
```

After this, we only need to use our tracker whenever we use a promise.

## Wraping the asynchronous calls

### ./src/components/member/actions/fetchMemberById.ts

```diff
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
+import { trackPromise } from 'react-promise-tracker';

export const fetchMemberByIdAction = (id: number) => (dispatch) => {
+  trackPromise(
    memberAPI.fetchMemberById(id)
      .then((member) => {
        dispatch(fetchMemberByIdCompleted(member));
      })
+  );
};

const fetchMemberByIdCompleted = (member: MemberEntity) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
});
```

### ./src/components/member/actions/memberFieldChange.ts

```diff

import { FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberFormValidation } from '../memberFormValidation';
+ import { trackPromise } from 'react-promise-tracker';

export const memberFieldChangeAction = (member: MemberEntity, fieldName: string, value: any) => (dispatch) => {
+  trackPromise(
    memberFormValidation.validateField(member, fieldName, value)
    .then((fieldValidationResult) => {
      dispatch(memberFieldChangeCompleted(fieldValidationResult, value));
    })
+    );
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

```diff
import { FormValidationResult } from 'lc-form-validation';
import * as toastr from 'toastr';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { memberFormValidation } from '../memberFormValidation';
+ import {trackPromise} from 'react-promise-tracker';

export const saveMemberAction = (member: MemberEntity) => (dispatch) => {
+  trackPromise(
    memberFormValidation.validateForm(member)
      .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
          saveMember(member);
        }
        dispatch(saveMemberActionCompleted(formValidationResult));
      })
+    );
};

const saveMember = (member: MemberEntity) => {
+  trackPromise(
    memberAPI.saveMember(member)
      .then(() => {
        toastr.success('Member saved.');
        history.back();
      })
      .catch(toastr.error)
+  );
};

const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
  type: actionTypes.SAVE_MEMBER,
  payload: formValidationResult,
});

```

### ./src/components/members/actions/fetchMembers.ts

```diff
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
+ import { trackPromise } from 'react-promise-tracker';

export const fetchMembersAction = () => (dispatch) => {
+  trackPromise(
    memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    })
+  );
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
});

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
