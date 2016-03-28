import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as React from 'react';
import configureStore = require('redux-mock-store');
import * as memberActions from '../../../actions/initializeNewMember';
import MemberPageContainer from '../memberPage.container';
import MemberEntity from '../../../api/memberEntity';
import MemberErrors from '../../../validations/memberFormErrors';

const createStore = configureStore();

describe('MemberPage container component', () => {
    it('should renders MemberPage presentational component with member property equals undefined' +
        'passing state equals { member: { member: undefined } }', () => {

        let mockStore = createStore({
            member: {
                member: undefined
            }
        });

        let memberPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );

        let memberPagePresentationalWrapper = memberPageContainerWrapper.find('MemberPage');
        expect(memberPagePresentationalWrapper).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('member')).to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('errors')).to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('saveCompleted')).to.be.undefined;
    });

    it('should renders MemberPage presentational component with member property equals { id: 1 } ' +
        'passing state equals { member: { member: { id: 1 } } }', () => {
        let member = new MemberEntity();
        member.id = 1;

        let mockStore = createStore({
            member: {
                member: member,
                errors: new MemberErrors() //We have to initialize due to deep childrens
            }
        });

        let memberPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );

        let memberPagePresentationalWrapper = memberPageContainerWrapper.find('MemberPage');
        expect(memberPagePresentationalWrapper).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('member')).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('member').id).to.be.equals(member.id);
    });

    it('should renders MemberPage presentational component with errors property equals undefined' +
        'passing state equals { member: { errors: undefined } }', () => {

        let mockStore = createStore({
            member: {
                errors: undefined
            }
        });

        let memberPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );

        let memberPagePresentationalWrapper = memberPageContainerWrapper.find('MemberPage');
        expect(memberPagePresentationalWrapper).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('errors')).to.be.undefined;
    });

    it('should renders MemberPage presentational component with errors property equals { login: "test" }' +
        'passing state equals { member: { errors: { login: "test" } } }', () => {
        let errors = new MemberErrors();
        errors.login = "test";

        let mockStore = createStore({
            member: {
                errors: errors
            }
        });

        let memberPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );

        let memberPagePresentationalWrapper = memberPageContainerWrapper.find('MemberPage');
        expect(memberPagePresentationalWrapper).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('errors')).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('errors').login).to.be.equals(errors.login);
    });

    it('should renders MemberPage presentational component with saveCompleted property equals undefined' +
        'passing state equals { member: { saveCompleted: undefined} }', () => {

        let mockStore = createStore({
            member: {
                saveCompleted: undefined
            }
        });

        let memberPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );

        let memberPagePresentationalWrapper = memberPageContainerWrapper.find('MemberPage');
        expect(memberPagePresentationalWrapper).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('saveCompleted')).to.be.undefined;
    });

    it('should renders MemberPage presentational component with saveCompleted property equals false' +
        'passing state equals { member: { saveCompleted: false} }', () => {

        let mockStore = createStore({
            member: {
                saveCompleted: false
            }
        });

        let memberPageContainerWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );

        let memberPagePresentationalWrapper = memberPageContainerWrapper.find('MemberPage');
        expect(memberPagePresentationalWrapper).not.to.be.undefined;
        expect(memberPagePresentationalWrapper.prop('saveCompleted')).to.be.false;
    });
});
