import { expect } from 'chai';
import { shallow, mount } from "enzyme";
import * as React from "react";
import MembersPage from '../membersPage';
import MemberEntity from '../../../api/memberEntity';
import RepoEntity from '../../../api/repoEntity';
import MemberList from '../memberList';
import RepoList from "../../repos/repoList";


describe('MembersPage presentational component', () => {
    it('should renders a div with text equals "No data" and does not calls to loadMembers and loadRepos' +
        'passing members and repos properties equals undefined and using shallow enzyme method', () => {
        let loadMembersMock = sinon.spy();
        let loadReposMock = sinon.spy();

        let properties = {
            members: undefined,
            repos: undefined,
            loadMembers: loadMembersMock,
            loadRepos: loadReposMock
        };

        var membersPageWrapper = shallow(
            <MembersPage {...properties} />
        );

        expect(membersPageWrapper.type()).to.be.equals('div');
        expect(membersPageWrapper.text()).to.be.equals('No data');
        expect(loadMembersMock.calledOnce).to.be.false;
        expect(loadReposMock.calledOnce).to.be.false;
    });

    it('should renders a div with text equals "No data" and does not calls to loadMembers and loadRepos' +
        'passing members equals empty array and repos equals undefined and using shallow enzyme method', () => {
        let loadMembersMock = sinon.spy();
        let loadReposMock = sinon.spy();

        let properties = {
            members: new Array<MemberEntity>(),
            repos: undefined,
            loadMembers: loadMembersMock,
            loadRepos: loadReposMock
        };

        var membersPageWrapper = shallow(
            <MembersPage {...properties} />
        );

        expect(membersPageWrapper.type()).to.be.equals('div');
        expect(membersPageWrapper.text()).to.be.equals('No data');
        expect(loadMembersMock.calledOnce).to.be.false;
        expect(loadReposMock.calledOnce).to.be.false;
    });

    it('should renders a div with text equals "No data" and does not calls to loadMembers and loadRepos' +
        'passing members equals undefined and repos equals empty array and using shallow enzyme method', () => {
        let loadMembersMock = sinon.spy();
        let loadReposMock = sinon.spy();

        let properties = {
            members: undefined,
            repos: new Array<RepoEntity>(),
            loadMembers: loadMembersMock,
            loadRepos: loadReposMock
        };

        var membersPageWrapper = shallow(
            <MembersPage {...properties} />
        );

        expect(membersPageWrapper.type()).to.be.equals('div');
        expect(membersPageWrapper.text()).to.be.equals('No data');
        expect(loadMembersMock.calledOnce).to.be.false;
        expect(loadReposMock.calledOnce).to.be.false;
    });

    it('should renders a div with class equals "row" and two children, MemberList with property members equals empty ' +
        'and RepoList with property repos equals empty, and does not calls to loadMembers and loadRepos' +
        'passing members equals empty array and repos equals empty array and using shallow enzyme method', () => {
        let loadMembersMock = sinon.spy();
        let loadReposMock = sinon.spy();

        let properties = {
            members: new Array<MemberEntity>(),
            repos: new Array<RepoEntity>(),
            loadMembers: loadMembersMock,
            loadRepos: loadReposMock
        };

        var membersPageWrapper = shallow(
            <MembersPage {...properties} />
        );

        expect(membersPageWrapper.type()).to.be.equals('div');
        expect(membersPageWrapper.hasClass('row')).to.be.true;
        expect(membersPageWrapper.children().at(0).type()).to.be.equals(MemberList);
        expect(membersPageWrapper.children().at(0).prop('members')).to.be.empty;
        expect(membersPageWrapper.children().at(1).type()).to.be.equals(RepoList);
        expect(membersPageWrapper.children().at(1).prop('repos')).to.be.empty;
        expect(loadMembersMock.calledOnce).to.be.false;
        expect(loadReposMock.calledOnce).to.be.false;
    });

    it('should renders a div with class equals "row" and two children, MemberList with property members equals array with one member ' +
        'and RepoList with property repos equals array with one repo, and does not calls to loadMembers and loadRepos' +
        'passing members equals [member] and repos equals [repo] array and using shallow enzyme method', () => {
        let loadMembersMock = sinon.spy();
        let loadReposMock = sinon.spy();

        let member = new MemberEntity();
        let repo = new RepoEntity();

        let properties = {
            members: [member],
            repos: [repo],
            loadMembers: loadMembersMock,
            loadRepos: loadReposMock
        };

        var membersPageWrapper = shallow(
            <MembersPage {...properties} />
        );

        expect(membersPageWrapper.type()).to.be.equals('div');
        expect(membersPageWrapper.hasClass('row')).to.be.true;
        expect(membersPageWrapper.children().at(0).type()).to.be.equals(MemberList);
        expect(membersPageWrapper.children().at(0).prop('members')).to.have.length(1);
        expect(membersPageWrapper.children().at(1).type()).to.be.equals(RepoList);
        expect(membersPageWrapper.children().at(1).prop('repos')).to.have.length(1);
        expect(loadMembersMock.calledOnce).to.be.false;
        expect(loadReposMock.calledOnce).to.be.false;
    });

    it('should calls to componentDidMount' +
        'passing members and repos properties equals undefined and using mount enzyme method', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let componentDidMountMock = sinon.stub(MembersPage.prototype, 'componentDidMount');

        let properties = {
            members: undefined,
            repos: undefined
        };

        var membersPageWrapper = mount(
            <MembersPage {...properties} />
        );

        expect(componentDidMountMock.calledOnce).to.be.true;
    }).bind(this));

    it('should calls toloadMembers and loadRepos' +
        'passing members and repos properties equals undefined and using mount enzyme method', () => {
        let loadMembersMock = sinon.spy();
        let loadReposMock = sinon.spy();

        let properties = {
            members: undefined,
            repos: undefined,
            loadMembers: loadMembersMock,
            loadRepos: loadReposMock
        };

        var membersPageWrapper = mount(
            <MembersPage {...properties} />
        );

        expect(loadMembersMock.calledOnce).to.be.true;
        expect(loadReposMock.calledOnce).to.be.true;
    });
});
