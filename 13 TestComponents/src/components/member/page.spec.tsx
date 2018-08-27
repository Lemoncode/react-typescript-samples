import * as React from 'react';
import {MemberPage, Props} from './page';
import * as SaveMember from './actions/saveMember';
import {shallow} from 'enzyme';
import { createEmptyMember } from '../../reducers/member';
import { createEmptyMemberErrors } from '../../reducers/memberErrors';
import { MemberEntity } from '../../model';


describe ('/components/member/page specs',()=>{
    it('should return as expected when props are passed',()=>{
        //arrange
        const props:Props = {
            memberId:-1,
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: () => {},
            onChange: () =>{},
            onSave: ()=>{}
        }
        //act
        const component = shallow (
            <MemberPage {...props} />
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
        const props: Props = {
            memberId: -1,
            member: newMember,
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: () => { },
            onChange: () => { },
            onSave: jest.fn(),
        }
       

        const actionSaveStub = jest.spyOn(SaveMember, 'saveMemberAction')
             .mockImplementation(()=>(
               { ...newMember,}
            ));
               
        const component = shallow(
            <MemberPage {...props} />,
        );

        
        //component.prop('onSave')();
        component.simulate('save',newMember);
       
        //assert
        expect(props.onSave).toHaveBeenCalledWith(newMember);

    });

    it('should call onChange when Changes are made', () => {
        //arrange

         const newMember: MemberEntity = {
             id: 56789,
             avatar_url: 'test new avatar',
             login: 'test new login'
         }
        const props: Props = {
            memberId: -1,
            member: newMember,
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: () => { },
            onChange: jest.fn(),
            onSave: () => { } ,
        }

        let fieldName =  'test fieldName';
        let value =  'test value';

        //act
        const component = shallow(
            <MemberPage {...props} />
        );


         component.simulate('change', fieldName, value);
        //assert
         expect(props.onChange).toHaveBeenCalledWith(newMember,fieldName, value);

    }); 
    it ('should componetDidMount when component is called',()=>{
        //arrange
        const props: Props = {
            memberId: -1,
            member: createEmptyMember(),
            memberErrors: createEmptyMemberErrors(),
            fetchMemberById: jest.fn(),
            onChange: ()=>{},
            onSave: () => { },
        }

        //act
        const component = shallow(
            <MemberPage {...props} />
        );

        component.find('componentDidMount');
       
        //assert
        expect (props.fetchMemberById).toHaveBeenCalled();
    });
});