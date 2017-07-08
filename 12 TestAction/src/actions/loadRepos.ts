import RepoEntity from '../api/repoEntity';
import repoAPI from '../api/repoAPI';
import assignRepos from './assignRepos';

function loadRepos() {
  return dispatcher => {
    var promise: Q.Promise<RepoEntity[]>;
    promise = repoAPI.getAllReposAsync();

    promise.then(
      data => dispatcher(assignRepos(data))
    );

    return promise;
  }
}

export default loadRepos;
