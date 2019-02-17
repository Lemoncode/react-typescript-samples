import * as React from "react";
import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker } from "./components";
import { Color } from "./model/color";

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  });

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 500);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const setUsernameState = () => {
    setName(editingName);
  };

  return (
    <>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor}/>
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === "" || editingName === name}
      />
    </>
  );
};
