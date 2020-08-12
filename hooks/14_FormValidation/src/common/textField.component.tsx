import * as React from "react";
import { useField } from "formik";
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";

export const TextFieldComponent: React.FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const textFieldProps = Boolean(field) ? field : props;
  const hasError = Boolean(meta && meta.touched && meta.error);

  return (
    <>
      <MuiTextField
        {...props}
        name={textFieldProps.name}
        onChange={textFieldProps.onChange}
        onBlur={textFieldProps.onBlur}
        value={textFieldProps.value}
        error={hasError}
        helperText={hasError ? meta.error : ""}
        fullWidth={true}
        margin="normal"
      />
    </>
  );
};
