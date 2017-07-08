import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router';
import MemberList from '../memberList';
import MemberEntity from '../../../api/memberEntity';
import MemberRow from '../memberRow';

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
        'text equals "Members Page" passing members equals empty', () => {
        let members = [];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.type()).to.be.equals('div');
        expect(memberListWrapper.children().at(1).type()).to.be.equals(Link);
        expect(memberListWrapper.children().at(1).prop('to')).to.be.equals('/member');
        expect(memberListWrapper.children().at(1).children().text()).to.be.equals('New Member');
    });

    it('should renders a div, table element like child with class equals "table" ' +
        'passing members equals empty', () => {
        let members = [];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.type()).to.be.equals('div');
        expect(memberListWrapper.children().at(2).type()).to.be.equals('table');
        expect(memberListWrapper.children().at(2).hasClass('table')).to.be.true;
    });

    it('should renders a div, table element like child with 3 head columns "Avatar" "Id" and "Name"' +
        'passing members equals empty', () => {
        let members = [];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.type()).to.be.equals('div');
        expect(memberListWrapper.children().at(2).type()).to.be.equals('table');
        expect(memberListWrapper.children().at(2).find('thead').contains(
            <thead>
            <tr>
                <th>
                    Avatar
                </th>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
            </tr>
            </thead>
        )).to.be.true;
    });

    it('should renders a div, table element like child with empty tbody element' +
        'passing members equals empty', () => {
        let members = [];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.type()).to.be.equals('div');
        expect(memberListWrapper.children().at(2).type()).to.be.equals('table');
        expect(memberListWrapper.children().at(2).find('tbody').html()).to.be.equals('<tbody></tbody>');
    });

    it('should renders a div, table element like child with one MemberRow element inside tbody element' +
        'with key property equals 1 and member property equals member' +
        'passing members equals [member]', () => {
        let member = new MemberEntity();
        member.id = 1;

        let members = [member];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.find('tbody').children().at(0).type()).to.be.equals(MemberRow);
        expect(memberListWrapper.find('tbody').children().get(0).key).to.be.equals(member.id.toString());
        expect(memberListWrapper.find('tbody').children().at(0).prop('member')).to.be.equals(member);
        expect(memberListWrapper.find('tbody').children().at(1).type()).to.be.null;
    });

    it('should renders a div, table element like child with two MemberRow elements inside tbody element' +
        'with key property equals 1 and 2 and member property equals member1 and member2' +
        'passing members equals [member1, member2]', () => {
        let member1 = new MemberEntity();
        member1.id = 1;
        let member2 = new MemberEntity();
        member2.id = 2;

        let members = [member1, member2];

        let memberListWrapper = shallow(
            <MemberList members={members}/>
        );

        expect(memberListWrapper.find('tbody').children().at(0).type()).to.be.equals(MemberRow);
        expect(memberListWrapper.find('tbody').children().get(0).key).to.be.equals(member1.id.toString());
        expect(memberListWrapper.find('tbody').children().at(0).prop('member')).to.be.equals(member1);
        expect(memberListWrapper.find('tbody').children().get(1).key).to.be.equals(member2.id.toString());
        expect(memberListWrapper.find('tbody').children().at(1).prop('member')).to.be.equals(member2);
        expect(memberListWrapper.find('tbody').children().at(2).type()).to.be.null;
    });
});
