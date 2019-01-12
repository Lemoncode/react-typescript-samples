# 18 Hooks

In this sample we will see how to use Hooks, a new concept introduced in React 16.7.0.

We will take as startup point sample _08 ParamNavigation_.

Summary steps:

- Update react and react-dom versions.
- Transform MembersPage component using Hooks.
- Transform MemberPageContainer using Hooks.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of `08 ParamNavigation` folder to an empty folder for the sample.
- Install dependencies:

```
npm install
```
- Uninstall react and react-dom dependencies:

```
npm uninstall react react-dom --save
```

- Install react and react-dom 16.7.0-alpha.0 version

```
npm install react@16.7.0-alpha.0 react-dom@16.7.0-alpha.0 --save
```

- We are going to convert MembersPage component, which is currently a class, into a function component using the _useState_ Hook.

- Let's start by adding Hooks to MembersPage component. Although we don't have properties, we will keep the interface _Props_ in case we want to add some in the future.

  Now, instead of using the _State_ interface, we use the _useState_ Hook that provides us with the current state (the _members_ object) and a function to update it (the _setMembers_ function).

  Also, we are using the _useEffect_ Hook to perform the async call to fetch members when the component is mounted, but we are calling the Hook with an empty array as second parameter in order to tell React that we don't want the effect to rerun because it doesn't depend on any values from props or state.

  As a result, our old class component has become a stateless component.
 
 _.src\components\members\page.tsx_

```diff
- interface State {
-  members: MemberEntity[];
- }

interface Props {
}

- export class MembersPage extends React.Component<Props, State> {
-   constructor(props) {
-     super(props);
-     this.state = { members: [] };
-   }
+ export const MembersPage: React.StatelessComponent<Props> = () => {

- public componentDidMount() {  
+ const [members, setMembers] = React.useState([]);

+ const loadMembers = () => {   
    memberAPI.fetchMembersAsync()
    .then((members) => {
-     this.setState({ members });
+     setMembers(members);
    });
  }

+  React.useEffect(() => {
+    loadMembers();
+  }, []);

- public render() {
  return (
    <div className="row">
      <h2> Members Page</h2>
      <Link to="/member">New Member</Link>
      <table className="table">
        <thead>
          <MemberHeader />
        </thead>
        <tbody>
          {
-           this.state.members.map((member) =>
+           members.map((member) =>
              <MemberRow
                key={member.id}
                member={member}
              />
            )
          }
        </tbody>
      </table>
    </div>
  );
}
-};
```
-  We could improve the reusability of our code extracting the _useState_ Hook into a function.

_.src\components\members\page.tsx_
```diff
+ const useMembers = () => {
+  const [members, setMembers] = React.useState([]);
+
+  const loadMembers = () => {    
+    memberAPI.fetchMembersAsync()
+    .then((members) => {
+      setMembers(members);
+    });
+  }
+
+  return { members, loadMembers };
+ }

export const MembersPage: React.StatelessComponent<Props> = () => {

+ const { members, loadMembers } = useMembers();
- const [members, setMembers] = React.useState([]);
  
- const loadMembers = () => {    
-   memberAPI.fetchMembersAsync()
-   .then((members) => {
-     setMembers(members);
-   });
- }

  React.useEffect(() => {
    loadMembers();
  }, []);
```

- Now, let's do the same in MemberPageContainer.

_.src/components/member/pageContainer.tsx_

- Firstly, we are going to fix some Typescript errors:
```diff
+ import { RouteComponentProps } from 'react-router';

- interface Props {
-  params: { id: string };
+ interface Params {
+  id: string;
+ }

+ interface Props extends RouteComponentProps<Params> {
}
```

- Then, we are going to transform it into a stateless component with _useState_ and _useEffect_ Hooks. In this case, as the state contains two elements, we will use the _useState_ function twice, once per object in the state.

```diff
- interface State {
-   member: MemberEntity;
-   memberErrors: MemberErrors;
- }

- export class MemberPageContainer extends React.Component<any, State> {
+ export const MemberPageContainer: React.StatelessComponent<Props> = (props: Props) => {
-  constructor(props) {
-    super(props);

-    this.state = {
-      member: {
-        id: -1,
-        login: '',
-        avatar_url: '',
-      },
-      memberErrors: {
-        login: new FieldValidationResult(),
-      }
-    };

-    this.onFieldValueChange = this.onFieldValueChange.bind(this);
-    this.onSave = this.onSave.bind(this);
-  }

+  const [member, setMember] = React.useState({
+    id: -1,
+    login: '',
+    avatar_url: '',
+  });

+  const [memberErrors, setMemberErrors] = React.useState({
+    login: new FieldValidationResult(),
+  }); 

-  public componentDidMount() {
+    const loadMember = () => {
-    const memberId = Number(this.props.match.params.id) || 0;
+    const memberId = Number(props.match.params.id) || 0;
     memberAPI.fetchMemberById(memberId)
-      .then((member) => {
-        this.setState({
-          ...this.state,
-          member,
-        });
-      });
   }

+  React.useEffect(() => {
+    loadMember();
+  }, []);

-  private onFieldValueChange(fieldName: string, value: string) {
-    memberFormValidation.validateField(this.state.member, fieldName, value)
+  const onFieldValueChange = (fieldName: string, value: string) => {
+    memberFormValidation.validateField(member, fieldName, value)
       .then((fieldValidationResult) => {
-        const nextState = {
-          ...this.state,
-          member: {
-            ...this.state.member,
-            [fieldName]: value,
-          },
-          memberErrors: {
-            ...this.state.memberErrors,
-            [fieldName]: fieldValidationResult,
-          }
-        };
+        setMember({
+          ...member,
+          [fieldName]: value
+        });
+        setMemberErrors({
+          ...memberErrors,          
+          [fieldName]: fieldValidationResult,
+        });

-        this.setState(nextState);
      });
   }

-  private onSave() {
-    memberFormValidation.validateForm(this.state.member)
+  const onSave = () => {
+    memberFormValidation.validateForm(member)
       .then((formValidationResult) => {
         if (formValidationResult.succeeded) {
-          memberAPI.saveMember(this.state.member)
+          memberAPI.saveMember(member)
             .then(() => {
               toastr.success('Member saved.');
-              this.props.history.goBack();
+              props.history.goBack();
             });
         }
       });
   }

-  render() {
   return (
     <MemberPage
-      member={this.state.member}
-      memberErrors={this.state.memberErrors}
-      onChange={this.onFieldValueChange}
-      onSave={this.onSave}
+      member={member}
+      memberErrors={memberErrors}
+      onChange={onFieldValueChange}
+      onSave={onSave}
      />
   );
-  }
}  
``` 

- Now, we can run the sample and everything should be working as it was in sample `08 ParamNavigation`:
```
npm start
```

- More info about State and Effect Hooks:

  https://reactjs.org/docs/hooks-state.html
  
  https://reactjs.org/docs/hooks-effect.html

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
