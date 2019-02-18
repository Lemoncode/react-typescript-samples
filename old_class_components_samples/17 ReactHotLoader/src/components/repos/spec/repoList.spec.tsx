import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router';
import RepoList from '../repoList';
import RepoEntity from '../../../api/repoEntity';
import RepoRow from '../repoRow';

describe('RepoList presentational component', () => {
    it('should renders a div, h2 element like child with text equals "Repos" ' +
        'passing repos equals empty', () => {
        let repos = [];

        let repoListWrapper = shallow(
            <RepoList repos={repos}/>
        );

        expect(repoListWrapper.type()).to.be.equals('div');
        expect(repoListWrapper.children().at(0).type()).to.be.equals('h2');
        expect(repoListWrapper.children().at(0).text()).to.be.equals('Repos');
    });

    it('should renders a div, table element like child with class equals "table" ' +
        'passing repos equals empty', () => {
        let repos = [];

        let repoListWrapper = shallow(
            <RepoList repos={repos}/>
        );

        expect(repoListWrapper.type()).to.be.equals('div');
        expect(repoListWrapper.children().at(1).type()).to.be.equals('table');
        expect(repoListWrapper.children().at(1).hasClass('table')).to.be.true;
    });

    it('should renders a div, table element like child with 2 head columns "Id" and "Name"' +
        'passing repos equals empty', () => {
        let repos = [];

        let repoListWrapper = shallow(
            <RepoList repos={repos}/>
        );

        expect(repoListWrapper.type()).to.be.equals('div');
        expect(repoListWrapper.children().at(1).type()).to.be.equals('table');
        expect(repoListWrapper.children().at(1).find('thead').contains(
            <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
            </tr>
            </thead>
        )).to.be.true;
    });

    it('should renders a div, table element like child with empty tbody element' +
        'passing repos equals empty', () => {
        let repos = [];

        let repoListWrapper = shallow(
            <RepoList repos={repos}/>
        );

        expect(repoListWrapper.type()).to.be.equals('div');
        expect(repoListWrapper.children().at(1).type()).to.be.equals('table');
        expect(repoListWrapper.children().at(1).find('tbody').html()).to.be.equals('<tbody></tbody>');
    });

    it('should renders a div, table element like child with one RepoRow element inside tbody element' +
        'with key property equals 1 and repo property equals repo' +
        'passing repos equals [repo]', () => {
        let repo = new RepoEntity();
        repo.id = 1;

        let repos = [repo];

        let repoListWrapper = shallow(
            <RepoList repos={repos}/>
        );

        expect(repoListWrapper.find('tbody').children().at(0).type()).to.be.equals(RepoRow);
        expect(repoListWrapper.find('tbody').children().get(0).key).to.be.equals(repo.id.toString());
        expect(repoListWrapper.find('tbody').children().at(0).prop('repo')).to.be.equals(repo);
        expect(repoListWrapper.find('tbody').children().at(1).type()).to.be.null;
    });

    it('should renders a div, table element like child with two RepoRow elements inside tbody element' +
        'with key property equals 1 and 2 and repo property equals repo1 and repo2' +
        'passing repos equals [repo1, repo2]', () => {
        let repo1 = new RepoEntity();
        repo1.id = 1;
        let repo2 = new RepoEntity();
        repo2.id = 2;

        let repos = [repo1, repo2];

        let repoListWrapper = shallow(
            <RepoList repos={repos}/>
        );

        expect(repoListWrapper.find('tbody').children().at(0).type()).to.be.equals(RepoRow);
        expect(repoListWrapper.find('tbody').children().get(0).key).to.be.equals(repo1.id.toString());
        expect(repoListWrapper.find('tbody').children().at(0).prop('repo')).to.be.equals(repo1);
        expect(repoListWrapper.find('tbody').children().get(1).key).to.be.equals(repo2.id.toString());
        expect(repoListWrapper.find('tbody').children().at(1).prop('repo')).to.be.equals(repo2);
        expect(repoListWrapper.find('tbody').children().at(2).type()).to.be.null;
    });
});
