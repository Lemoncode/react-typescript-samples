import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';
import {Link} from 'react-router';

describe('Header presentational component', () =>{
    it('should renders a div element with class equals row and this div has a nav like children', () => {
        let headerWrapper = shallow(<Header />);

        expect(headerWrapper.contains(
            <div className="row">
              <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/members">Members</Link></li>
                    </ul>
                </div>
              </nav>
            </div>
        )).to.be.true;
    });
})
