import * as React from 'react';
import MemberEntity from './../../api/memberEntity';
import Input from './../common/textInput';

interface Props extends React.Props<MemberForm> {
  member : MemberEntity
  onChange : (event:any) => any;
  onSave : (event:any) => any;
  errors: any;
}

interface State {
}

export default class MemberForm extends React.Component<Props, State> {
  constructor(props : Props){
      super(props);
  }


  public render() {
     return (
		    <form>
          <h1> Manage member </h1>

          <Input
  					name="login"
  					label="Login"
  					value={this.props.member.login}
  					onChange={this.props.onChange}
  					error={this.props.errors.login} />

            <Input
    					name="avatar_url"
    					label="Avatar Url"
    					value={this.props.member.avatar_url}
    					onChange={this.props.onChange}
    					error={this.props.errors.avatar_rul} />

           <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
        </form>
     );
  }
}
