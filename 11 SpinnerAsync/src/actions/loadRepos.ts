import RepoAPI from '../api/repoAPI';
import assignRepos from './assignRepos';

function loadRepos() {
    return dispatcher => {
      return RepoAPI.getAllReposAsync().then(
        data => dispatcher(assignRepos(data))
      );
    }
}

export default loadRepos;
