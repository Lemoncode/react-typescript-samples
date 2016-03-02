import * as React from 'react';
import * as toastr from 'toastr';
import MemberEntity from './../../api/memberEntity'
import MemberForm from './memberForm';
//import * as ObjectAssign from 'object-assign';
import objectAssign = require('object-assign');

interface Props {
}

interface State {
  member : MemberEntity
  ,errors: any
  ,dirty  : boolean
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class memberPage extends React.Component<Props, State> {

  constructor(props : Props){
        super(props);
        // set initial state
        this.state = {
                      member: new MemberEntity()
                      ,errors : {}
                      ,dirty : false
                     };
  }

  setMemberState(event) {
    // https://www.npmjs.com/package/object-assign
    var newState : State = objectAssign({}, this.state, {dirty: true});
    this.setState(newState);

		var field = event.target.name;
		var value = event.target.value;
		this.state.member[field] = value;

    newState = objectAssign({}, this.state, {member: this.state.member});
    return this.setState(newState);
	}


  public render() {
       return (
         <MemberForm
            member={this.state.member}
            errors={this.state.errors}
            onChange={this.setMemberState.bind(this)}/>
       );
  }
}
