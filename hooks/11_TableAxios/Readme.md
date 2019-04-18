# 11 Table fetch

In this sample we are going to update the previous sampe (mock table) and instead of
returning mock data, return real data from the github rest api.

# Steps to reproduce the sample

- We will take as starting point sample _10 tableMock_, let's copy the content from this
  sample and execute _npm install_.

```bash
npm install
```

- To retrieve data from the Github REST api we will make use of axios, let's install the package
  (no need to install typing, they are already included in the library).

```bash
npm install axios --save
```

- Time to open the _memberApi_ file and replace the mock data with a real api call.

_./src/api/memberApi.ts_

```diff
import { MemberEntity } from "../model/member";
+ import Axios, { AxiosResponse } from 'axios';

+ const gitHubURL = 'https://api.github.com';
+ const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getMembersCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
+    try {
+      Axios.get<MemberEntity[]>(gitHubMembersUrl)
+        .then(response => resolve(mapMemberListApiToModel(response)));
+    } catch (ex) {
+      reject(ex);
+    }
-    setTimeout(
-      () =>
-        resolve([
-          {
-            id: 1457912,
-            login: "brauliodiez",
-            avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
-          },
-          {
-            id: 4374977,
-            login: "Nasdan",
-            avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
-          }
-        ]),
-      500
-    );
  });

  return promise;
};

+ const mapMemberListApiToModel = ({data}: AxiosResponse<any[]>): MemberEntity[] =>
+  data.map(gitHubMember => ({
+    id: gitHubMember.id,
+    login: gitHubMember.login,
+    avatar_url: gitHubMember.avatar_url
+  }));
```

- Aaaand... we don't need to add any update on the rest of the application, why?
  The function is providing the same contract it returns a promise<MemberEntity[]>,
  let's give a try:

```bash
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
