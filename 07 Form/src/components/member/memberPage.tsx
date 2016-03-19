import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import objectAssign = require('object-assign');
import MemberEntity from './../../api/memberEntity';
import MemberForm from './memberForm';
import MemberAPI from '../../api/memberAPI';

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

  // on any update on the form this function will be called
  setMemberState(event) {
    // https://www.npmjs.com/package/object-assign
    //var newState : State = objectAssign({}, this.state, {dirty: true});
    //this.setState(newState);

		var field = event.target.name;
		var value = event.target.value;
		this.state.member[field] = value;

    var newState : State = objectAssign({}, this.state, {dirty: true, member: this.state.member});
    return this.setState(newState);
	}

 // We could extract all this logic to a separate class and add
 // unit test cases, on the other hand we could implement some
 // method to just check the current field that is being changed
 // validity
 memberFormIsValid() {
   var formIsValid = true;
   this.state.errors = {}; //clear any previous errors.

   // TODO: Pending extract this to class and add unit testing

   if (this.state.member.login.length < 3) {
     this.state.errors.login = 'Login must be at least 3 characters.';
     formIsValid = false;
   }

   // TODO: Pending adding url validation on avatar, use this simple lib
   // https://github.com/chriso/validator.js
   var newState : State = objectAssign({}, this.state, {errors: this.state.errors});
   this.setState(newState);

  return formIsValid;
 }

public saveMember(event) {
  event.preventDefault();

  if(!this.memberFormIsValid()) {
    return;
  }

  MemberAPI.saveAuthor(this.state.member);

  var newState : State = objectAssign({}, this.state, {dirty: true});
  this.setState(newState);

  toastr.success('Author saved.');

  // using hashHistory, TODO: proper configure browserHistory on app and here
  hashHistory.push('/members')

}

 public render() {
       return (
         <MemberForm
            member={this.state.member}
            errors={this.state.errors}
            onChange={this.setMemberState.bind(this)}
            onSave={this.saveMember.bind(this)}
            />
       );
 }
}
