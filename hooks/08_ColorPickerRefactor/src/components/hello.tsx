import * as React from "react";

interface Props {
  userName: string;
}

export const HelloComponent: React.FC<Props> = (props) => {
  return <h2>Hello user: {props.userName} !</h2>;
};
