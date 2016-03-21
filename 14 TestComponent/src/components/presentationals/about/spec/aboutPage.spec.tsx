import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../aboutPage';

describe('AboutPage presentational component', () =>{
  it('should renders a h2 element with text equals "About Page" and a Link element with text equals "Members"', () => {
    //Arrange

    //Act
    let AboutPageWrapper = shallow(<AboutPage />);

    //Assert
    expect(AboutPageWrapper.find('h2')).to.have.length(1);
    expect(AboutPageWrapper.find('h2').text()).to.be.equals("About Page");
  })
})
