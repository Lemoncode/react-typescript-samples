import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import AboutPage from '../aboutPage';

describe('AboutPage presentational component', () =>{
    it('should renders an h2 element with text "About Page"', () => {
        let aboutPageWrapper = shallow(<AboutPage />);

        expect(aboutPageWrapper.find('h2')).to.be.exist;
        expect(aboutPageWrapper.find('h2').text()).to.be.equals('About Page');
    });
})
