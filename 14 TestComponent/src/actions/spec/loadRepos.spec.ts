import { expect } from 'chai';
import configureStore = require('redux-mock-store');
import { loadRepos } from '../loadRepos';
import RepoEntity from '../../api/repoEntity';
import repoAPI from '../../api/repoAPI';
import ReduxThunk from 'redux-thunk';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('loadRepos', () => {
  it('should return a promise, and this promise dispatch assignRepos action that returns ' +
    'an action equals { type: REPOS_ASSIGN, repos: expectedRepos }', sinon.test((done) => {
    let sinon : Sinon.SinonStatic = this;
    let repo1 = new RepoEntity();
    let repo2 = new RepoEntity();

    repo1.name = "test1";
    repo2.name = "test2"

    let expectedRepos : Array<RepoEntity> = [repo1, repo2];

    // Arrange
    let getAllReposAsyncMethodStub = sinon.stub(repoAPI, 'getAllReposAsync');
    getAllReposAsyncMethodStub.returns({
      then: callback => {
        callback(expectedRepos);
      }
    });

    const expectedAction = {
      type: 'REPOS_ASSIGN',
      repos: expectedRepos
    }

    // Act
    const store = mockStore([]);

    store.dispatch(loadRepos())
      .then(() => {
        expect(store.getActions()[0].type).to.be.equal((expectedAction.type));
        expect(store.getActions()[0].repos.length).to.be.equal(2);
        done();
      });
  }).bind(this));
});
