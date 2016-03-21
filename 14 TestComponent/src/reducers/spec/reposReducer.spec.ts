import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import reposReducer from '../reposReducer';
import RepoEntity from '../../api/repoEntity';

describe('reposReducer', () => {
    it('should return empty array state when passing initialState equals undefined and action equals {}', () => {
        let initialState = undefined;
        let action = {};

        let finalState = reposReducer(initialState, action);

        expect(finalState.length).to.be.equal(0);
    });

    it('should return empty array state when passing initialState equals [] and action equals {}', () => {
        let initialState = [];
        let action = {};

        deepFreeze(initialState);
        let finalState = reposReducer(initialState, action);

        expect(finalState.length).to.be.equal(0);
    });

    it('should return new array with same items when passing initialState equals [repo1, repo2] and action equals {}', () => {
        let repo1 = new RepoEntity();
        let repo2 = new RepoEntity();

        repo1.name = "test1";
        repo2.name = "test2"

        let initialState : Array<RepoEntity> = [repo1, repo2];
        let action = {};

        deepFreeze(initialState);
        let finalState = reposReducer(initialState, action);

        expect(finalState.length).to.be.equal(2);
        expect(finalState[0].name).to.be.equal("test1");
        expect(finalState[1].name).to.be.equal("test2");
      });

      it('should return new array with items when passing initialState equals [] and action equals ' +
        '{ type: "REPOS_ASSIGN", repos: [repo1, repo2]}', () => {
          let repo1 = new RepoEntity();
          let repo2 = new RepoEntity();

          repo1.name = "test1";
          repo2.name = "test2"
          let repos : Array<RepoEntity> = [repo1, repo2];

          let initialState = [];
          let action = {type: 'REPOS_ASSIGN', repos: repos};

          deepFreeze(initialState);
          let finalState = reposReducer(initialState, action);

          expect(finalState.length).to.be.equal(2);
          expect(finalState[0].name).to.be.equal("test1");
          expect(finalState[1].name).to.be.equal("test2");
        });
})
