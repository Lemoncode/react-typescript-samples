import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router';
import MemberRow from '../memberRow';
import MemberEntity from '../../../api/memberEntity';

describe('MemberRow presentational component', () => {
    it('should renders a tr element with three td like children' +
        'passing member property with default values', () => {
        let member = new MemberEntity();

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(0).type()).to.be.equals('td');
        expect(memberRowWrapper.children().at(1).type()).to.be.equals('td');
        expect(memberRowWrapper.children().at(2).type()).to.be.equals('td');
        expect(memberRowWrapper.children().at(3).type()).to.be.null;
    });

    it('should renders a img element in first column with class equals "avatar" ' +
        'and src property equals empty' +
        'passing member property with default values', () => {
        let member = new MemberEntity();

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(0).children().type()).to.be.equals('img');
        expect(memberRowWrapper.children().at(0).children().hasClass('avatar')).to.be.true;
        expect(memberRowWrapper.children().at(0).children().prop('src')).to.be.empty;
    });

    it('should renders a img element in first column with class equals "avatar" ' +
        'and src property equals "test"' +
        'passing member property equals { avatar_url: "test"}', () => {
        let member = new MemberEntity();
        member.avatar_url = "test";

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(0).children().type()).to.be.equals('img');
        expect(memberRowWrapper.children().at(0).children().hasClass('avatar')).to.be.true;
        expect(memberRowWrapper.children().at(0).children().prop('src')).to.be.equals('test');
    });

    it('should renders a Link element in second column with to property equals "/memberEdit/-1" ' +
        'and text equals -1' +
        'passing member property with default values', () => {
        let member = new MemberEntity();

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(1).children().type()).to.be.equals(Link);
        expect(memberRowWrapper.children().at(1).children().prop('to')).to.be.equals('/memberEdit/-1');
        expect(memberRowWrapper.children().at(1).children().children().text()).to.be.equals('-1');
    });

    it('should renders a Link element in second column with to property equals "/memberEdit/2" ' +
        'and text equals 2' +
        'passing member property equals { id: 2 }', () => {
        let member = new MemberEntity();
        member.id = 2

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(1).children().type()).to.be.equals(Link);
        expect(memberRowWrapper.children().at(1).children().prop('to')).to.be.equals('/memberEdit/2');
        expect(memberRowWrapper.children().at(1).children().children().text()).to.be.equals('2');
    });

    it('should renders a span element in third column with text equals empty ' +
        'passing member property with default values', () => {
        let member = new MemberEntity();

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(2).children().type()).to.be.equals('span');
        expect(memberRowWrapper.children().at(2).children().text()).to.be.empty;
    });

    it('should renders a span element in third column with text equals "test" ' +
        'passing member property equals { login: "test" }', () => {
        let member = new MemberEntity();
        member.login = "test";

        let memberRowWrapper = shallow(
            <MemberRow member={member}/>
        );

        expect(memberRowWrapper.type()).to.be.equals('tr');
        expect(memberRowWrapper.children().at(2).children().type()).to.be.equals('span');
        expect(memberRowWrapper.children().at(2).children().text()).to.be.equals('test');
    });
});
