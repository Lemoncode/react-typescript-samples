import { LoginEntity } from "../model/login";

// Just a fake loginAPI
export const isValidLogin = (loginInfo: LoginEntity): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(loginInfo.login === "admin" && loginInfo.password === "test");
    }, 500);
  });
