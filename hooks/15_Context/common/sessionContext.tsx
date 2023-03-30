import * as React from "react";

export interface SessionContextProps {
    login: string;
    updateLogin: (value: string) => void;
}

export const createDefaultUser = (): SessionContextProps => ({
    login: "no user",
    updateLogin: value => {
        console.warn(
            "if you are reading this, likely you forgot to add the provider on top of your app"
        );
    }
});

export interface Props {
    children: React.ReactNode;
}

export const SessionProvider: React.FunctionComponent = (props: Props) => {
    const [login, setLogin] = React.useState<string>("");

    return (
        <SessionContext.Provider value={{ login, updateLogin: setLogin }}>
            {props.children}
        </SessionContext.Provider>
    );
};

export const SessionContext = React.createContext<SessionContextProps>(createDefaultUser());