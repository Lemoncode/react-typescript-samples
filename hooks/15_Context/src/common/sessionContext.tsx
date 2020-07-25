import * as React from "react";

export interface SessionContextProps {
  login: string;
  updateLogin: (value) => void;
}

export const createDefaultUser = (): SessionContextProps => ({
  login: "no user",
  updateLogin: (value) => {
    console.warn(
      "if you are reading this, likely you forgot to add the provider on top of your app"
    );
  },
});

export const SessionContext = React.createContext<SessionContextProps>(
  createDefaultUser()
);

export const SessionProvider: React.FC = (props) => {
  const [login, setLogin] = React.useState<string>("");

  return (
    <SessionContext.Provider value={{ login, updateLogin: setLogin }}>
      {props.children}
    </SessionContext.Provider>
  );
};
