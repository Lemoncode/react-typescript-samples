import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import RepoRow from '../repoRow';
import RepoEntity from '../../../api/repoEntity';

describe('RepoRow presentational component', () => {
    it('should renders a tr element with two td like children' +
        'passing repo property with default values', () => {
        let repo = new RepoEntity();

        let repoRowWrapper = shallow(
            <RepoRow repo={repo}/>
        );

        expect(repoRowWrapper.type()).to.be.equals('tr');
        expect(repoRowWrapper.children().at(0).type()).to.be.equals('td');
        expect(repoRowWrapper.children().at(1).type()).to.be.equals('td');
        expect(repoRowWrapper.children().at(2).type()).to.be.null;
    });

    it('should renders a span element in first column with text equals "-1" ' +
        'passing repo property with default values', () => {
        let repo = new RepoEntity();

        let repoRowWrapper = shallow(
            <RepoRow repo={repo}/>
        );

        expect(repoRowWrapper.type()).to.be.equals('tr');
        expect(repoRowWrapper.children().at(0).children().type()).to.be.equals('span');
        expect(repoRowWrapper.children().at(0).children().text()).to.be.equals('-1');
    });

    it('should renders a span element in first column with text equals "2" ' +
        'passing repo property equals { id: 2 }', () => {
        let repo = new RepoEntity();
        repo.id = 2

        let repoRowWrapper = shallow(
            <RepoRow repo={repo}/>
        );

        expect(repoRowWrapper.type()).to.be.equals('tr');
        expect(repoRowWrapper.children().at(0).children().type()).to.be.equals('span');
        expect(repoRowWrapper.children().at(0).children().text()).to.be.equals('2');
    });

    it('should renders a span element in second column with text equals empty ' +
        'passing repo property with default values', () => {
        let repo = new RepoEntity();

        let repoRowWrapper = shallow(
            <RepoRow repo={repo}/>
        );

        expect(repoRowWrapper.type()).to.be.equals('tr');
        expect(repoRowWrapper.children().at(1).children().type()).to.be.equals('span');
        expect(repoRowWrapper.children().at(1).children().text()).to.be.empty;
    });

    it('should renders a span element in second column with text equals "test" ' +
        'passing repo property equals { name: "test" }', () => {
        let repo = new RepoEntity();
        repo.name = "test";

        let repoRowWrapper = shallow(
            <RepoRow repo={repo}/>
        );

        expect(repoRowWrapper.type()).to.be.equals('tr');
        expect(repoRowWrapper.children().at(1).children().type()).to.be.equals('span');
        expect(repoRowWrapper.children().at(1).children().text()).to.be.equals('test');
    });
});
