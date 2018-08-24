import * as React from 'react';
import { shallow } from 'enzyme';
import { State } from '../../reducers';
import configureStore from 'redux-mock-store';
import  MemberPageContainer  from './pageContainer';
import { createEmptyMember } from '../../reducers/member';
import {createEmptyMembers} from '../../reducers/members';
import {createEmptyMemberErrors} from '../../reducers/memberErrors';
import * as MemberFieldChange from './actions/memberFieldChange';
import * as SaveMember from './actions/saveMember';

const getMockStore = configureStore();

describe('pages/login/pageContainer tests', () => {
    it('should render as expected passing state', () => {
        // Arrange
        const state = {
            member: createEmptyMember() ,
            memberErrors: createEmptyMemberErrors(),
            members: createEmptyMembers(),
        } as State;

        const store = getMockStore(state);

        // Act
        const component = shallow(
            <MemberPageContainer />,
            {
                context: { store },
            },
        );

        // Assert
        expect(component).toMatchSnapshot();
    });


    it('should call to memberFieldChangeAction action creator when call to onChange prop', () => {
        // Arrange
        const state = {
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            members: createEmptyMembers(),
        } as State;


        const store = getMockStore(state);
        const actionCreatorStub = jest.spyOn(MemberFieldChange, 'memberFieldChangeAction')
            .mockImplementation(() => ({
                type: 'test action type',
            }));

        // Act
        const component = shallow(
            <MemberPageContainer
            />,
            {
                context: { store },
            },
        );

         component.prop('onChange')(state.member,'test fieldName', 'test value');
          // Assert
        expect(actionCreatorStub).toHaveBeenCalledWith(state.member, 'test fieldName', 'test value');
    }); 
    it('should call to Save action creator when call to onSave prop', () => {
        // Arrange
        const state = {
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            members: createEmptyMembers(),
        } as State;

        const store = getMockStore(state);
        const actionCreatorStub = jest.spyOn(SaveMember, 'saveMemberAction')
            .mockImplementation(() => ({
                type: 'test action type',
            }));

        // Act
        const component = shallow(
            <MemberPageContainer
            />,
            {
                context: { store },
            },
        );

        component.prop('onSave')(state.member);

        // Assert
        expect(actionCreatorStub).toHaveBeenCalledWith(state.member);
    });
});
