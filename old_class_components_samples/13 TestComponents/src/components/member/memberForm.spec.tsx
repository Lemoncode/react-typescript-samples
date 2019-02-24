import * as React from 'react';
import {MemberForm} from './memberForm';
import {shallow} from 'enzyme';



describe('common/components/member/memberForm test', () => {
    it('should render as expected when passing required properties', () => {
        //Arrange
        const props = {
            member:{
                id: 12345,
                login:'some loging test',
                avatar_url:'some url test'
            },
            memberErrors:{
                login:{
                    key: 'test key',
                    type: 'test type',
                    succeeded: true,
                    errorMessage: 'test error message'
                }
            },
            onChange: () =>{},
            onSave: () =>{}    
        };
        //Act

        const component = shallow (
            <MemberForm {...props} />
        )
        //Assert

        expect(component).toMatchSnapshot();
    });
});