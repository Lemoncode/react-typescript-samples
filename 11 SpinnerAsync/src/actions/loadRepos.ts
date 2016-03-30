import repoAPI from '../api/repoAPI';
import assignRepos from './assignRepos';

function loadRepos() {
    return dispatcher => {
      return repoAPI.getAllReposAsync().then(
        data => dispatcher(assignRepos(data))
      );
    }
}

export default loadRepos;
