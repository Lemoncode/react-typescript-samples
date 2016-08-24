import { expect } from 'chai';
import assignRepos from '../assignRepos';
import RepoEntity from '../../api/repoEntity';

describe('assignRepos', () => {
  it('should return repos action type: REPOS_ASSIGN and repos: [] when passing an empty repos Array', () => {
      // Arrange
      const repos = new Array<RepoEntity>();

      // Act
      let result = assignRepos(repos);

      // Assert
      expect(result.type).to.be.equal('REPOS_ASSIGN');
      expect(result.repos.length).to.be.equal(0);
  });

  it('should return repos action type: REPOS_ASSIGN and repos: repo Array with two items when passing ' +
        'a repo Array with two items', () => {
      // Arrange
      const repos = new Array<RepoEntity>();

      let repo1 = new RepoEntity();
      let repo2 = new RepoEntity();

      repo1.name = 'test1';
      repo2.name = 'test2';

      repos.push(repo1);
      repos.push(repo2);

      // Act
      let result = assignRepos(repos);

      // Assert
      expect(result.type).to.be.equal('REPOS_ASSIGN');
      expect(result.repos.length).to.be.equal(2);
      expect(result.repos[0].name).to.be.equal('test1');
      expect(result.repos[1].name).to.be.equal('test2');
  });
});
