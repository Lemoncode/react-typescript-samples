import * as React from "react";

interface Props {
    initialUserName: string;
    onNameUpdated: () => any;
    editingName: string;
    onEditingNameUpdated: (newEditingName: string) => any;
}

export const NameEditComponent = (props: Props) => {
    // const [editingName, setEditingName] = React.useState(props.initialUserName);
    const [lastInitialName, setLastInitialName] = React.useState(props.initialUserName);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setEditingName(e.target.value);
        props.onNameUpdated();
    }

    const onNameSubmit = (event: any): any => {
        // props.onNameUpdated(editingName);
        props.onNameUpdated();
    }

    // if (props.initialUserName !== lastInitialName) {
    //     setLastInitialName(props.initialUserName);
    //     setEditingName(props.initialUserName);
    // }
    return (
        <>
            <label>Update name:</label>
            <input value={props.editingName} onChange={onChange} />
            <button onClick={onNameSubmit}>Change</button>
        </>
    )
}