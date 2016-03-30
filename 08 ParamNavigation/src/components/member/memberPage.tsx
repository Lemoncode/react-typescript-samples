import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import objectAssign = require('object-assign');
import MemberEntity from './../../api/memberEntity';
import MemberForm from './memberForm';
import memberAPI from '../../api/memberAPI';

interface Props extends React.Props<MemberPage> {
  params : any
}

interface State {
  member : MemberEntity
  ,errors: any
  ,dirty  : boolean
}


export default class MemberPage extends React.Component<Props, State> {

  constructor(props : Props){
        super(props);
        // set initial state
        this.state = {
                      member: new MemberEntity()
                      ,errors : {}
                      ,dirty : false
                     };
  }

  componentWillMount() {
    var memberId = this.props.params.id;

    if(memberId) {
      var memberIdNumber : number = parseInt(memberId);
      var newState : State = objectAssign({}, this.state, {dirty: false, member: memberAPI.getMemberById(memberIdNumber)});
      return this.setState(newState);

    }
  }

  // on any update on the form this function will be called
  setMemberState(event) {
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

  memberAPI.saveAuthor(this.state.member);

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
