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
import MemberErrors from  '../../validations/MemberFormErrors'
import uiInputMember from '../../actions/uiInputMember'
import resetSaveCompleted from '../../actions/resetSaveCompleted'
import newMember from  '../../actions/newMember'

interface Props extends React.Props<MemberPage> {
  params : any
  member? : MemberEntity
  ,errors?: MemberErrors
  ,dirty?  : boolean
  ,saveCompleted? : boolean
  ,onLoad? : (id : number) => void
  ,onUiInputMember : (fieldName : string, value : any) => void
  ,onSaveMember: () => void
  ,onNewMember: () => void
  ,resetSaveCompleted: () => void
}

class MemberPage extends React.Component<Props, {}> {

  constructor(props : Props){
        super(props);

  }

  componentWillMount() {
    // Coming from navigation
    var memberId = this.props.params.id;

    if(memberId) {
      var memberIdNumber : number = parseInt(memberId);
      this.props.onLoad(memberIdNumber);
    } else {
      this.props.onNewMember();
    }
  }

 // https://github.com/reactjs/redux/issues/580
 componentWillReceiveProps(nextProps) {
   if(this.props.saveCompleted != nextProps.saveCompleted
      && nextProps.saveCompleted == true) {

      // Show toast
     toastr.success('Author saved.');

     // using hashHistory, TODO: proper configure browserHistory on app and here
     hashHistory.push('/members')

     // Reset saveCompleted flag
     this.props.resetSaveCompleted();

   }
 }

  // on any update on the form this function will be called
  updateMemberFromUI(event) {
    var field = event.target.name;
		var value = event.target.value;

    this.props.onUiInputMember(field, value);
	}

public saveMember(event) {
  event.preventDefault();

  this.props.onSaveMember();
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
      ,saveCompleted : state.member.saveCompleted
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (id : number) => {return dispatch(loadMember(id))}
    ,onUiInputMember: (fieldName : string, value : any) => {return dispatch(uiInputMember(fieldName, value))}
    ,onSaveMember: () =>  {return dispatch(saveMember())}
    ,resetSaveCompleted: () => {return dispatch(resetSaveCompleted())}
    ,onNewMember: () => {return dispatch(newMember())
    }
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
