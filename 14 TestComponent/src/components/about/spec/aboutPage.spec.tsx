import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import AboutPage from '../aboutPage';

describe('AboutPage presentational component', () =>{
    it('should renders a div element with class equals row and this div has 2 children h2 and Link', () => {
        let aboutPageWrapper = shallow(<AboutPage />);

        expect(aboutPageWrapper.contains(
            <div className="row">
              <h2>About Page</h2>
              <Link to="/members">Members</Link>
            </div>
        )).to.be.true;
    });
})
