import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as React from 'react';
import configureStore = require('redux-mock-store');
import MembersPageContainer from "../membersPage.container";
import MemberEntity from '../../../api/memberEntity';
import RepoEntity from '../../../api/repoEntity';
import * as loadMemberActions from '../../../actions/loadMembers';
import * as loadRepoActions from '../../../actions/loadRepos';

const createStore = configureStore();

describe('MembersPage container component', () => {
    it('should renders MembersPage presentational component with members property equals undefined' +
        'passing state equals { members: undefined }', () => {
        let mockStore = createStore({
            members: undefined
        });

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('members')).to.be.undefined;
    });

    it('should renders MembersPage presentational component with members property equals empty' +
        'passing state equals { members: new Array<MemberEntity>() }', () => {
        let mockStore = createStore({
            members: new Array<MemberEntity>()
        });

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('members')).to.be.empty;
    });

    it('should renders MembersPage presentational component with members property equals array with one member' +
        'passing state equals { members: [member] }', () => {
        let member = new MemberEntity();

        let mockStore = createStore({
            members: [member]
        });

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('members')).to.have.length(1);
    });

    it('should renders MembersPage presentational component with repos property equals undefined' +
        'passing state equals { repos: undefined }', () => {
        let mockStore = createStore({
            repos: undefined
        });

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('repos')).to.be.undefined;
    });

    it('should renders MembersPage presentational component with repos property equals empty' +
        'passing state equals { repos: new Array<RepoEntity>() }', () => {
        let mockStore = createStore({
            repos: new Array<RepoEntity>()
        });

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('repos')).to.be.empty;
    });

    it('should renders MembersPage presentational component with repos property equals array with one repo' +
        'passing state equals { repos: [repo] }', () => {
        let repo = new RepoEntity();

        let mockStore = createStore({
            repos: [repo]
        });

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('repos')).to.have.length(1);
    });

    it('should renders MembersPage presentational component and calls to loadMembers' +
        'passing state equals { }', () => {
        let mockStore = createStore({
        });

        let loadMemberActionsMock = sinon.stub(loadMemberActions, 'loadMembers');

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        loadMemberActionsMock.restore();

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(loadMemberActionsMock.calledOnce).to.be.true;
    });

    it('should renders MembersPage presentational component and calls to loadRepos' +
        'passing state equals { }', () => {
        let mockStore = createStore({
        });

        let loadRepoActionsMock = sinon.stub(loadRepoActions, 'loadRepos');

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        loadRepoActionsMock.restore();

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(loadRepoActionsMock.calledOnce).to.be.true;
    });
});
