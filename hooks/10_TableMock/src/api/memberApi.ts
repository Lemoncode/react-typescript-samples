import { MemberEntity } from "../model/member";

export const getMembersCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1457912,
            login: "brauliodiez",
            avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
          },
          {
            id: 4374977,
            login: "Nasdan",
            avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
          }
        ]),
      500
    );
  });

  return promise;
};
