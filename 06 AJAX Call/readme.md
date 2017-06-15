# 06 AJAX Call

In this sample we will replace Members fake API with async call to API Github to retrieve list of members of a given team.

We will take a startup point sample _05 Presentational Comp_.

Summary steps:

- Update `About` component content.
- Replace `Member API` with real async call.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `05 Presentational Comp` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `06 AJAX Call` highlights. You can see updates in `./src/components/about.tsx`.

- Update `Member API` with real async call:

### ./src/api/member/index.ts
```diff
import { MemberEntity } from '../../model';
import { members } from './mockData';

+ const baseURL = 'https://api.github.com/orgs/lemoncode';

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

+ const fetchMembersAsync = (): Promise<MemberEntity[]> => {
- return Promise.resolve(members);
+ const membersURL = `${baseURL}/members`;

+ return fetch(membersURL)
+   .then((response) => (response.json()))
+   .then(mapToMembers);
};

+ const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
+   return githubMembers.map(mapToMember);
+ };

+ const mapToMember = (githubMember): MemberEntity => {
+   return {
+     id: githubMember.id,
+    login: githubMember.login,
+    avatar_url: githubMember.avatar_url,
+  };
+ };

export const memberAPI = {
  fetchMembers,
+ fetchMembersAsync,
};

```

- Use `fetchMembersAsync`:

### ./src/components/members/page.tsx
```diff
...

  public componentDidMount() {
-   memberAPI.fetchMembers()
+   memberAPI.fetchMembersAsync()
      .then((members) => {
        this.setState({ members });
      });
  }

  ...
};

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
