import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router';
import MemberList from '../memberList';

describe('MemberList presentational component', () => {
    it('should renders a div, h2 element like child with text equals "Members Page" ' +
        'passing members equals empty', () => {
        let members = [];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.type()).to.be.equals('div');
        expect(memberListWrapper.children().at(0).type()).to.be.equals('h2');
        expect(memberListWrapper.children().at(0).text()).to.be.equals('Members Page');
    });

    it('should renders a div, Link element like child with to property equals "/member" and ' +
        'text equals "Members Page"passing members equals empty', () => {
        let members = [];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.type()).to.be.equals('div');
        expect(memberListWrapper.children().at(1).type()).to.be.equals(Link);
        expect(memberListWrapper.children().at(1).prop('to')).to.be.equals('/member');
        expect(memberListWrapper.children().at(1).children().text()).to.be.equals('New Member');
    });
});
