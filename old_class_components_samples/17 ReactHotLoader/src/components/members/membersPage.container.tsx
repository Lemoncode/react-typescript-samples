import { connect } from 'react-redux';
import { loadMembers } from '../../actions/loadMembers';
import { loadRepos } from '../../actions/loadRepos';
import MembersPage from './membersPage';

const mapStateToProps = (state) => {
    return {
      members: state.members,
      repos: state.repos
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: () => { return dispatch(loadMembers()) },
    loadRepos: () => { return dispatch(loadRepos()) }
  }
}

const ContainerMembersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersPage)

export default ContainerMembersPage;
