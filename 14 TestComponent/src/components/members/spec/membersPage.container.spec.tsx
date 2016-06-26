import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as React from 'react';
import configureStore = require('redux-mock-store');
import MembersPageContainer from "../membersPage.container";
import MemberEntity from '../../../api/memberEntity';
import RepoEntity from '../../../api/repoEntity';
import * as loadMembersActions from '../../../actions/loadMembers';
import * as loadReposActions from '../../../actions/loadRepos';


const createStore = configureStore();

describe('MembersPage container component', () => {

    it('should renders MembersPage presentational component with members property equals undefined' +
        'passing state equals { members: undefined }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;

        let mockStore = createStore({
            members: undefined
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );


        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('members')).to.be.undefined;
    }).bind(this));


    it('should renders MembersPage presentational component with members property equals empty' +
        'passing state equals { members: new Array<MemberEntity>() }',  sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let mockStore = createStore({
            members: new Array<MemberEntity>()
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('members')).to.be.empty;
    }).bind(this));


    it('should renders MembersPage presentational component with members property equals array with one member' +
        'passing state equals { members: [member] }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let member = new MemberEntity();

        let mockStore = createStore({
            members: [member]
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );

        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('members')).to.have.length(1);
    }).bind(this));

    it('should renders MembersPage presentational component with repos property equals undefined' +
        'passing state equals { repos: undefined }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;

        let mockStore = createStore({
            repos: undefined
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );


        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('repos')).to.be.undefined;
    }).bind(this));

    it('should renders MembersPage presentational component with repos property equals empty' +
        'passing state equals { repos: new Array<RepoEntity>() }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;

        let mockStore = createStore({
            repos: new Array<RepoEntity>()
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );


        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('repos')).to.be.empty;
    }).bind(this));

    it('should renders MembersPage presentational component with repos property equals array with one repo' +
        'passing state equals { repos: [repo] }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;

        let repo = new RepoEntity();

        let mockStore = createStore({
            repos: [repo]
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );


        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(membersPagePresentationalWrapper).not.to.be.undefined;
        expect(membersPagePresentationalWrapper.prop('repos')).to.have.length(1);
    }).bind(this));

    it('should renders MembersPage presentational component and calls to loadMembers' +
        'passing state equals { }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let mockStore = createStore({
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );


        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(loadMembersActionMock.calledOnce).to.be.true;
    }).bind(this));

    it('should renders MembersPage presentational component and calls to loadRepos' +
        'passing state equals { }', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let mockStore = createStore({
        });

        let loadMembersActionMock = sinon.stub(loadMembersActions,
                                               'loadMembers',
                                               () => {
                                                 return {
                                                   type: 'dummy'
                                                 }
                                               }
                                               );


         let loadReposActionMock = sinon.stub(loadReposActions,
                                                'loadRepos',
                                                () => {
                                                  return {
                                                    type: 'dummy'
                                                  }
                                                }
                                                );


        let membersPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MembersPageContainer />
            </Provider>
        );

        var membersPagePresentationalWrapper = membersPageContainerWrapper.find('MembersPage');
        expect(loadReposActionMock.calledOnce).to.be.true;
    }).bind(this));

});
