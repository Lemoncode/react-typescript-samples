import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchMembersStartAction, fetchRepositoriesAction} from './actions';
import { MembersPage } from './page';

const mapStateToProps = (state: State) => ({
  members: state.members,
  repos: state.repositories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMembers: () => dispatch(fetchMembersStartAction()),
  fetchRepos: () =>dispatch(fetchRepositoriesAction()),
});

export const MembersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MembersPage);
