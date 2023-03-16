import * as React from "react";
import { Color } from "../model/color";

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

interface PropsColorSlider {
    key: string;
    value: number;
    onValueUpdated: (newValue: number) => void;
}

const ColorSliderComponent = (props: PropsColorSlider) => {
    return (
        <div>
            <input
                type="range"
                min="0"
                max="255"
                value={props.value}
                onChange={event => props.onValueUpdated(+event.target.value)}
            />
            {props.value}
        </div>
    )
}

const updateColor = (props: Props, colorId: keyof Color) => (value) => {
    props.onColorUpdated({
        ...props.color,
        [colorId]: value
    })
}

export const ColorPicker = (props: Props) => (
    <>
        {Object.keys(props.color).map((field: keyof Color) => (
            <ColorSliderComponent
                key={field}
                value={props.color[field]}
                onValueUpdated={updateColor(props, field)}
            />
        ))}
    </>
);