import { connect } from 'react-redux';
import { loadMember } from '../../actions/loadMember';
import { uiInputMember } from '../../actions/uiInputMember';
import MemberEntity from '../../api/memberEntity';
import { saveMember } from '../../actions/saveMember';
import { resetSaveCompleted } from '../../actions/resetSaveCompleted';
import { initializeNewMember } from '../../actions/initializeNewMember';
import MemberPage from './memberPage';

let mapStateToProps = (state) => {
    return {
      member: state.member.member
      ,errors : state.member.errors
      ,saveCompleted : state.member.saveCompleted
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    loadMember: (id : number) => {return dispatch(loadMember(id))}
    ,fireValidationFieldValueChanged: (fieldName : string, value : any) => {return dispatch(uiInputMember(fieldName, value))}
    ,saveMember: (member: MemberEntity) =>  {return dispatch(saveMember(member))}
    ,resetSaveCompletedFlag: () => {return dispatch(resetSaveCompleted())}
    ,initializeNewMember: () => {return dispatch(initializeNewMember())
    }
  }
}

let ContainerMemberPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberPage)


export default ContainerMemberPage;
