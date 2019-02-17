import * as React from 'react';
import {MemberRow,Props} from './memberRow';
import {shallow} from 'enzyme';
import { createEmptyMember } from '../../reducers/member';

describe('/components/members/memberRow',()=>{
    it('should render as expected whenprops are passed',()=>{
        //arrange    
        let member: Props = {member:createEmptyMember()};
        //act
            let component = shallow(    
                <MemberRow{...member}/>
            );
        //assert
        expect (component).toMatchSnapshot();
    });
})

