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
import initializeNewMember from  '../../actions/initializeNewMember';
import {UINotificationInfo} from "../../middleware/uiNotificationInfo";
import {NavigationInfo} from '../../middleware/navigationInfo'

interface Props extends React.Props<MemberPage> {
  params : any
  member? : MemberEntity
  ,errors?: MemberErrors
  ,loadMember? : (id : number) => void
  ,fireFieldValueChanged  : (fieldName : string, value : any) => void
  ,saveMember: (member: MemberEntity, notificationInfo : UINotificationInfo, navigationInfo : NavigationInfo) => void
  ,initializeNewMember: () => void
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

  // on any update on the form this function will be called
  updateMemberFromUI(event) {
    var field = event.target.name;
		var value = event.target.value;

    this.props.fireFieldValueChanged(field, value);
	}

public saveMember(event) {
  event.preventDefault();

  const notificationInfo = new UINotificationInfo();
  notificationInfo.successMessage = 'Author saved.';
  notificationInfo.errorMessage = 'Failed to save author.';

  const navigationInfo = new NavigationInfo();
  navigationInfo.successNavigationRoute = "/members";

  this.props.saveMember(this.props.member, notificationInfo, navigationInfo);
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
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadMember: (id : number) => {return dispatch(loadMember(id))}
    ,fireFieldValueChanged: (fieldName : string, value : any) => {return dispatch(uiInputMember(fieldName, value))}
    ,saveMember: (member: MemberEntity, notificationInfo : UINotificationInfo, navigationInfo : NavigationInfo) =>  {return dispatch(saveMember(member, notificationInfo, navigationInfo))}
    ,initializeNewMember: () => {return dispatch(initializeNewMember())
    }
  }
}

const ContainerMemberPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(MemberPage)


export default ContainerMemberPage;
