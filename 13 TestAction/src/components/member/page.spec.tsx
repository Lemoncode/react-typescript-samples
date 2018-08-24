import * as React from 'react';
import {MemberPage, Props} from './page';
import * as SaveMember from './actions/saveMember';
import {saveMemberAction} from './actions/saveMember';
import {shallow} from 'enzyme';
import { createEmptyMember } from '../../reducers/member';
import { createEmptyMemberErrors } from '../../reducers/memberErrors';
import { MemberEntity } from '../../model';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe ('/components/member/page specs',()=>{
    it('should retur as expected when definde props',()=>{
        //arrange
        const data:Props = {
            memberId:-1,
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: () => {},
            onChange: () =>{},
            onSave: ()=>{}
        }
        //act
        const component = shallow (
            <MemberPage {...data} />
        );
        //assert
        expect(component).toMatchSnapshot();
    });

    it('should call onSave when onSave is activated',()=>{
        //arrange
        const newMember:MemberEntity = {
            id:56789,
            avatar_url:'test new avatar',
            login: 'test new login'
        }
        const data: Props = {
            memberId: -1,
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: () => { },
            onChange: () => { },
            onSave: jest.fn(),
        }
        const store = getMockStore();

        const actionSaveStub = jest.spyOn(SaveMember, 'saveMemberAction')
             .mockImplementation(()=>(
               { ...newMember,}
            ));
               
        const component = shallow(
            <MemberPage {...data} />,
            {
            context: { store },
            },
        );

        
        component.prop('onSave')();
        console.log(`pete ${component}`);
        //assert
        expect(actionSaveStub).toHaveBeenCalledWith(newMember);

    });

    /* it('should call onChange when Changes are made', () => {
        //arrange

        const data: Props = {
            memberId: -1,
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: () => { },
            onChange: jest.fn(),
            onSave: () => { } ,
        }


        //act
        const component = shallow(
            <MemberPage {...data} />
        );


        component.find('data.onChange');
        //assert
        expect(component).toHaveBeenCalled();

    }); */
});