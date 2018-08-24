import * as React from 'react';
import { shallow } from 'enzyme';
import { State } from '../../reducers';
import configureStore from 'redux-mock-store';
import { createEmptyMembers } from '../../reducers/members';
import { createEmptyMember } from '../../reducers/member';
import { createEmptyMemberErrors } from '../../reducers/memberErrors';
import { MembersPageContainer } from './pageContainer';

const getMockStore = configureStore();

describe('/components/members/pageContainer', () => {
    it('should render as spected passing state',()=>{
        //arrange
        const state = {
            members: createEmptyMembers(),
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors()
        } as State;
        const store = getMockStore(state);
        //act
        
        const component =  shallow(
            <MembersPageContainer/>,
            {
                context: {store},
            },
        );
        //assert
        expect(component).toMatchSnapshot();
    });
});