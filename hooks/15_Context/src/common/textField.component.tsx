import * as React from "react";
import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

export const TextFieldComponent: React.FC<TextFieldProps> = (props) => {
    const [field, meta] = useField(props.name);
    const TextFieldProps = Boolean(field) ? field : props;
    const hasError = Boolean(meta && meta.touched && meta.error);

    return (
        <>

            <TextField
                {...props}
                name={TextFieldProps.name}
                onChange={TextFieldProps.onChange}
                onBlur={TextFieldProps.onBlur}
                value={TextFieldProps.value}
                error={hasError}
                helperText={hasError ? meta.error : ""}
                fullWidth={true}
                margin="normal"
            />
        </>
    );
}