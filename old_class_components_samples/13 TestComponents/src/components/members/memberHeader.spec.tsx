import * as React  from 'react';
import {MemberHeader} from './memberHeader';
import {shallow} from 'enzyme';

describe('./components/members/memberHeader',()=>{
    it('should render memberHeader as expected',()=>{
        //arrange
        //act
        const component =  shallow(
            <MemberHeader />
        );
        //Assert
        expect (component).toMatchSnapshot();

    });
});