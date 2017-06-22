import RepoEntity from '../api/repoEntity';
import RepoAPI from '../api/repoAPI';
import assignRepos from './assignRepos';

function loadRepos() {
  return dispatcher => {
    var promise: Q.Promise<RepoEntity[]>;
    promise = RepoAPI.getAllReposAsync();

    promise.then(
      data => dispatcher(assignRepos(data))
    );

    return promise;
  }
}

export {
    loadRepos
};
