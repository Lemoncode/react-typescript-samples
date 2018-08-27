import * as React from 'react';
import {MembersPage,Props} from './page';
import {shallow} from 'enzyme';
import { createEmptyMembers } from '../../reducers/members';
import  * as FetchMembers from './actions/fetchMembers';
import { members } from '../../api/member/mockData';


describe ('components/members/page specs', ()=>{
    it('should return as expected when props are passed',()=>{
        //arrange
        const props: Props = {
            members: createEmptyMembers(),
            fetchMembers: ()=>{}
        }
        //act
        const component =  shallow (
            <MembersPage {...props} />
        )
        //assert

        expect(component).toMatchSnapshot();
    })

    it('should display members when fetchMembers is used', () => {
        //arrange
       
        const props: Props = {
            members: createEmptyMembers(),
            fetchMembers: jest.fn(),
        }


        const fetchActionStub = jest.spyOn(FetchMembers, 'fetchMembersAction')
            .mockImplementation(()=>(
                props.members
        ));
            

        const component = shallow(
            <MembersPage {...props} />,
        );


        component.find('member');

        //assert
        expect(props.fetchMembers).toHaveBeenCalled();

    });
})