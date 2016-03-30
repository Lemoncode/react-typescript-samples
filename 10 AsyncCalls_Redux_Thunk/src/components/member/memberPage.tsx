import * as React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import objectAssign = require('object-assign');
import MemberEntity from './../../api/memberEntity';
import MemberForm from './memberForm';
import MemberErrors from  '../../validations/MemberFormErrors';
import loadMember from '../../actions/loadMember';
import saveMember from '../../actions/saveMember';
import uiInputMember from '../../actions/uiInputMember';
import resetSaveCompleted from '../../actions/resetSaveCompleted';
import initializeNewMember from  '../../actions/initializeNewMember';

interface Props extends React.Props<MemberPage> {
  params : any
  member? : MemberEntity
  ,errors?: MemberErrors
  ,saveCompleted? : boolean
  ,loadMember? : (id : number) => void
  ,fireFieldValueChanged  : (fieldName : string, value : any) => void
  ,saveMember: (member: MemberEntity) => void
  ,initializeNewMember: () => void
  ,resetSaveCompletedFlag: () => void
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
      this.props.loadMember(memberIdNumber);
    } else {
      this.props.initializeNewMember();
    }
  }

 // https://github.com/reactjs/redux/issues/580
 componentWillReceiveProps(nextProps) {
   if(this.props.saveCompleted != nextProps.saveCompleted
      && nextProps.saveCompleted) {

      // Show toast
     toastr.success('Author saved.');

     // using hashHistory, TODO: proper configure browserHistory on app and here
     hashHistory.push('/members')

     // Reset saveCompleted flag
     this.props.resetSaveCompletedFlag();

   }
 }

  // on any update on the form this function will be called
  updateMemberFromUI(event) {
    var field = event.target.name;
		var value = event.target.value;

    this.props.fireFieldValueChanged(field, value);
	}

public saveMember(event) {
  event.preventDefault();

  this.props.saveMember(this.props.member);
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
      ,errors : state.member.errors
      ,saveCompleted : state.member.saveCompleted
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadMember: (id : number) => {return dispatch(loadMember(id))}
    ,fireFieldValueChanged: (fieldName : string, value : any) => {return dispatch(uiInputMember(fieldName, value))}
    ,saveMember: (member: MemberEntity) =>  {return dispatch(saveMember(member))}
    ,resetSaveCompletedFlag: () => {return dispatch(resetSaveCompleted())}
    ,initializeNewMember: () => {return dispatch(initializeNewMember())
    }
  }
}

const ContainerMemberPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(MemberPage)


export default ContainerMemberPage;
