import * as React from 'react';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as toastr from 'toastr';
import MemberEntity from './../../api/memberEntity'
import MemberForm from './memberForm';
import MemberAPI from '../../api/memberAPI';
import objectAssign = require('object-assign');
import loadMember from '../../actions/loadMember'
import saveMember from '../../actions/saveMember'
import markMemberAsDirty from '../../actions/markMemberAsDirty'

interface Props extends React.Props<MemberPage> {
  params : any
  member? : MemberEntity
  ,errors?: any
  ,dirty?  : boolean
  ,onLoad? : (id : number) => void
}

class MemberPage extends React.Component<Props, {}> {

  constructor(props : Props){
        super(props);
  }

  componentWillMount() {
    var memberId = this.props.params.id;

    if(memberId) {
      var memberIdNumber : number = parseInt(memberId);
      this.props.onLoad(memberIdNumber);
      //var newState : State = objectAssign({}, this.state, {dirty: false, member: MemberAPI.getMemberById(memberIdNumber)});
      //return this.setState(newState);

    }
  }

  // on any update on the form this function will be called
  setMemberState(event) {
    /*
    var field = event.target.name;
		var value = event.target.value;
		this.state.member[field] = value;

    var newState : State = objectAssign({}, this.state, {dirty: true, member: this.state.member});
    return this.setState(newState);
    */
	}

 // We could extract all this logic to a separate class and add
 // unit test cases, on the other hand we could implement some
 // method to just check the current field that is being changed
 // validity
 memberFormIsValid() {
   /*
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
  */
 }

public saveMember(event) {
  event.preventDefault();
  /*
  if(!this.memberFormIsValid()) {
    return;
  }


  MemberAPI.saveAuthor(this.state.member);

  var newState : State = objectAssign({}, this.state, {dirty: true});
  this.setState(newState);

  toastr.success('Author saved.');

  // using hashHistory, TODO: proper configure browserHistory on app and here
  hashHistory.push('/members')
  */
}

 public render() {
   if(!this.props.member)
      return (<div>No data</div>)

       return (
         <MemberForm
            member={this.props.member}
            errors={this.props.errors}
            onChange={this.setMemberState.bind(this)}
            onSave={this.saveMember.bind(this)}
            />
       );
 }
}

// Container

const mapStateToProps = (state) => {
    return {
      member: state.member.member
      ,dirty : state.member.dirty
      ,errors : state.member.errors
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (id : number) => {return dispatch(loadMember(id))}
  }
}

// TODO: Hack to bypass the issue when declaring StateLessComponent
// Pending research here
var nonTypedMemberPage : any = MemberPage;

const ContainerMemberPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(nonTypedMemberPage)


export default ContainerMemberPage;
