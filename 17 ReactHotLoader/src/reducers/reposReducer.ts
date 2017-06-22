import RepoEntity from '../api/repoEntity';

export default (state: Array<RepoEntity> = [], action) => {
  switch (action.type){
    case 'REPOS_ASSIGN':
      return [...action.repos];

    default:
      return state;
  }
}
