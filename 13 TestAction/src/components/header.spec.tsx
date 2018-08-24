import * as React from 'react';
import {Header} from  './header';

import { shallow} from 'enzyme';


describe('/src/components/header test',()=>{
    it ('should render as expected', ()=>{
        //Arrange
        //act
        const component = shallow(
            <Header/>
        );
        
        //assert
        expect(component).toMatchSnapshot();
    });
});