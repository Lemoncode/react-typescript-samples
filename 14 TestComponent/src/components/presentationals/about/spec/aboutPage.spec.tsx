import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import AboutPage from '../aboutPage';

describe('AboutPage presentational component', () =>{
    it('should renders a div element with class equals row and this div have 2 childrens', () => {
        let aboutPageWrapper = shallow(<AboutPage />);

        expect(aboutPageWrapper.find('div')).to.have.length(1);
        expect(aboutPageWrapper.find('div').hasClass('row')).to.be.true;
        expect(aboutPageWrapper.find('div').children()).to.have.length(2);
    });

    it('should renders a div with children h2 element with text equals "About Page"', () => {
        let aboutPageWrapper = shallow(<AboutPage />);

        expect(aboutPageWrapper.find('h2')).to.have.length(1);
        expect(aboutPageWrapper.find('h2').text()).to.be.equals("About Page");
    });

    it('should renders a div with children Link element with text equals "Members" and property ' +
        'to equals "/members"', () => {
        let aboutPageWrapper = shallow(<AboutPage />);

        expect(aboutPageWrapper.find('Link')).to.have.length(1);
        //Need access to children because it's not a basic HTML Element
        expect(aboutPageWrapper.find('Link').children().text()).to.be.equals("Members");
        expect(aboutPageWrapper.find('Link').prop('to')).to.be.equals("/members");
    });
})
