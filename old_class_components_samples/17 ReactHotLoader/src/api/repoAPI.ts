import RepoEntity from './repoEntity';
import * as Q from 'q';
import http from '../http/http';

class RepoAPI {

  //This would be performed on the server in a real app. Just stubbing in.
  private _clone (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  getAllReposAsync(): Q.Promise<RepoEntity[]> {
    var deferred = Q.defer<Array<RepoEntity>>();

    http.Get('https://api.github.com/orgs/lemoncode/repos').then(
      function (data) {
          var repos: Array<RepoEntity>;

          repos = data.map(gitHubRepo => {
            var repo: RepoEntity = new RepoEntity();

            repo.id = gitHubRepo.id;
            repo.name = gitHubRepo.name

            return repo;
          });

          deferred.resolve(repos);
      }
    );

    return deferred.promise;
  }
}

export default new RepoAPI();
