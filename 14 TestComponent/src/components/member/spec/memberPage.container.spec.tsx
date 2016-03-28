import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as React from 'react';
import configureStore = require('redux-mock-store');
import * as MemberActions from '../../../actions/initializeNewMember';
import MemberPageContainer from '../memberPage.container';

const createStore = configureStore();

describe('MemberPage container component', () => {
    it('should renders MemberPage presentational component with member, errors and saveCompleted properties' +
        'equals undefined and it calls to initializeNewMember action when passing state equals' +
        '{ member: { member: undefined, errors: undefined, saveCompleted: undefined} }');

        let mockStore = createStore({
            member: {
                member: undefined,
                errors: undefined,
                saveCompleted: undefined
            }
        });

        let memberPageWrapper = mount(
            <Provider store={mockStore}>
                <MemberPageContainer />
            </Provider>
        );
});
