import * as React from "react";

interface Props {
  userName: string;
}

export const HelloComponent = (props: Props) => {
  return <h2>Hello user: {props.userName} !</h2>;
};
