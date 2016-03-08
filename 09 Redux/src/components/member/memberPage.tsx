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
import validateMember from '../../actions/validateMember'
import MemberErrors from  '../../validations/MemberFormErrors'
import uiInputMember from '../../actions/uiInputMember'

interface Props extends React.Props<MemberPage> {
  params : any
  member? : MemberEntity
  ,errors?: MemberErrors
  ,dirty?  : boolean
  ,onLoad? : (id : number) => void
  ,onSetDirty? : (dirty: boolean) => void
  ,onValidateMember: (member : MemberEntity) => void
  ,onUiInputMember : (fieldName : string, value : any) => void
  ,onSaveMember: () => void
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
    }
  }


  // on any update on the form this function will be called
  updateMemberFromUI(event) {
    var field = event.target.name;
		var value = event.target.value;

    this.props.onUiInputMember(field, value);

    //this.props.onSetDirty(true);
	}

 // We could extract all this logic to a separate class and add
 // unit test cases, on the other hand we could implement some
 // method to just check the current field that is being changed
 // validity
 memberFormIsValid() {
   this.props.onValidateMember(this.props.member);


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
  // Add this at the end

  this.props.onSaveMember();

  //this.props.onSetDirty(false);
/*
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
            onChange={this.updateMemberFromUI.bind(this)}
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
    ,onSetDirty: (dirty : boolean) => {return dispatch(markMemberAsDirty(dirty))}
    ,onValidateMember: (member: MemberEntity) => {return dispatch(validateMember(member))}
    ,onUiInputMember: (fieldName : string, value : any) => {return dispatch(uiInputMember(fieldName, value))}
    ,onSaveMember: () =>  {return dispatch(saveMember())}
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
