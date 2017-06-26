import RepoEntity from '../api/repoEntity';

const assignRepos = (repos: Array<RepoEntity>) => {
  return {
    type: 'REPOS_ASSIGN',
    repos: repos
  };
};

export default assignRepos;
