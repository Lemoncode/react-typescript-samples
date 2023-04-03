import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
    const [name, setName] = React.useState('defaultUserName')
    const [editingName, setEditingName] = React.useState("defaultUserName");
    const setUsernameState = () => {
        setName(editingName)
    }

    const loadUsername = () => {
        setTimeout(() => {
            setName("name from async call");
            setEditingName("name from async call");
        }, 500);
    };

    React.useEffect(() => {
        loadUsername()
    }, []);
    return (
        <>
            <HelloComponent userName={name} />
            <NameEditComponent initialUserName={name}
                onNameUpdated={setUsernameState}
                editingName={editingName}
                onEditingNameUpdated={setEditingName}
                disabled={editingName === '' || editingName === name} />
        </>
    );
};