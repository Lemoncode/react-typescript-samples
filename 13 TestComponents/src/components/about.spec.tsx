import * as React from 'react';
import {About} from './about';
import { shallow } from 'enzyme';

describe ('components/about tests', () =>{
    it('should render as expected ',()=>{
        //Arrange
        //Act
         const component = shallow(
            <About/>
         );
        //Assert
        expect (component).toMatchSnapshot();
    });
});