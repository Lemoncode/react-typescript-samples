import * as React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

export const ColorPicker: React.FC<Props> = (props) => (
  <div>
    <input
      type="range"
      min="0"
      max="255"
      value={props.color.red}
      onChange={event =>
        props.onColorUpdated({
          red: +event.target.value,
          green: props.color.green,
          blue: props.color.blue
        })
      }
    />
    {props.color.red}
    <br />
    <input
      type="range"
      min="0"
      max="255"
      value={props.color.green}
      onChange={(event: any) =>
        props.onColorUpdated({
          red: props.color.red,
          green: event.target.value,
          blue: props.color.blue
        })
      }
    />
    {props.color.green}
    <br />
    <input
      type="range"
      min="0"
      max="255"
      value={props.color.blue}
      onChange={(event: any) =>
        props.onColorUpdated({
          red: props.color.red,
          green: props.color.green,
          blue: event.target.value
        })
      }
    />
    {props.color.blue}
    <br />
  </div>
);
