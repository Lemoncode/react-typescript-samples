import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LoginEntity } from '../../model';

interface Props {
  onLogin: () => void;
  onUpdateLoginField: (name: string, value: any) => void;
  loginInfo: LoginEntity;
}

export const LoginForm: React.StatelessComponent<Props> = (props: Props) => {

  const onTextFieldChange = (fieldId) => (e) => {
    props.onUpdateLoginField(fieldId, e.target.value);
  }

  return (
    <div className="login-form">
      <TextField 
        label="name"
        margin="normal"
        value={props.loginInfo.login}
        onChange={onTextFieldChange('login')}
      />
      <TextField
        label="password"
        type="password"
        margin="normal"
        value={props.loginInfo.password}
        onChange={onTextFieldChange('password')}
      />
      <Button variant="contained" color="primary" onClick={props.onLogin}>
        Login
      </Button>
    </div>
  );
}
