import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import MemberForm from '../memberForm';
import MemberEntity from '../../../api/memberEntity';
import MemberErrors from '../../../validations/memberFormErrors';
import Input from '../../common/textInput';

describe('MemberForm presentational component', () => {
    it('should renders a form with 4 children h1, Input, Input and input' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        expect(memberFormWrapper.type()).to.be.equals('form');
        expect(memberFormWrapper.children().at(0).type()).to.be.equals('h1');
        expect(memberFormWrapper.children().at(1).type()).to.be.equals(Input);
        expect(memberFormWrapper.children().at(2).type()).to.be.equals(Input);
        expect(memberFormWrapper.children().at(3).type()).to.be.equals('input');
    });

    it('should renders a h1 with text equals "Manage member"' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let h1Wrapper = memberFormWrapper.children().at(0);
        expect(h1Wrapper.type()).to.be.equals('h1');
        expect(h1Wrapper.text()).to.be.equals('Manage member');
    });

    it('should renders first Input with property name equals "login"' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('name')).to.be.equals('login');
    });

    it('should renders first Input with property label equals "Login"' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('label')).to.be.equals('Login');
    });

    it('should renders first Input with property value equals empty' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('value')).to.be.equals('');
    });

    it('should renders first Input with property value equals "test"' +
        'passing member equals { login: "test" }', () => {
        let member = new MemberEntity();
        member.login = "test";

        let properties = {
            member: member,
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('value')).to.be.equals('test');
    });

    it('should renders first Input with onChange property equals function and calls to onChangeMock ' +
        'passing mockedOnChange method when user write on input', () => {
        let onChangeMock = sinon.spy();

        let properties = {
            member: new MemberEntity(),
            onChange: onChangeMock,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        inputWrapper.simulate('change');

        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('onChange')).to.be.a('function');
        expect(onChangeMock.calledOnce).to.be.true;
    });

    it('should renders first Input with property error equals empty' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('error')).to.be.equals('');
    });

    it('should renders first Input with property error equals "test"' +
        'passing errors equals { login: "test" }', () => {
        let errors = new MemberErrors();
        errors.login = "test";

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: errors
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(1);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('error')).to.be.equals('test');
    });

    it('should renders second Input with property name equals "avatar_url"' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('name')).to.be.equals('avatar_url');
    });

    it('should renders second Input with property label equals "Avatar Url"' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('label')).to.be.equals('Avatar Url');
    });

    it('should renders second Input with property value equals empty' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('value')).to.be.equals('');
    });

    it('should renders second Input with property value equals "test"' +
        'passing member equals { avatar_url: "test" }', () => {
        let member = new MemberEntity();
        member.avatar_url = "test";

        let properties = {
            member: member,
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('value')).to.be.equals('test');
    });

    it('should renders second Input with onChange property equals function and calls to onChangeMock ' +
        'passing mockedOnChange method when user write on input', () => {
        let onChangeMock = sinon.spy();

        let properties = {
            member: new MemberEntity(),
            onChange: onChangeMock,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        inputWrapper.simulate('change');

        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('onChange')).to.be.a('function');
        expect(onChangeMock.calledOnce).to.be.true;
    });

    it('should renders second Input with property error equals empty' +
        'passing required properties with default values', () => {

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('error')).to.be.equals('');
    });

    it('should renders second Input with property error equals "test"' +
        'passing errors equals { avatar_url: "test" }', () => {
        let errors = new MemberErrors();
        errors.avatar_url = "test";

        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: errors
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(2);
        expect(inputWrapper.type()).to.be.equals(Input);
        expect(inputWrapper.prop('error')).to.be.equals('test');
    });

    it('should renders a input with property type equals "submit"' +
        'passing required properties with default values', () => {
        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(3);
        expect(inputWrapper.type()).to.be.equals('input');
        expect(inputWrapper.prop('type')).to.be.equals('submit');
    });

    it('should renders a input with property value equals "Save"' +
        'passing required properties with default values', () => {
        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(3);
        expect(inputWrapper.type()).to.be.equals('input');
        expect(inputWrapper.prop('value')).to.be.equals('Save');
    });

    it('should renders a input with property class equals "btn btn-default"' +
        'passing required properties with default values', () => {
        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(3);
        expect(inputWrapper.type()).to.be.equals('input');
        expect(inputWrapper.hasClass('btn')).to.be.true;
        expect(inputWrapper.hasClass('btn-default')).to.be.true;
    });

    it('should renders a input with property onClick equals undefined' +
        'passing required properties with default values', () => {
        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: undefined,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(3);
        expect(inputWrapper.type()).to.be.equals('input');
        expect(inputWrapper.prop('onClick')).to.be.equals(undefined);
    });

    it('should renders a input with property onClick equals function and calls to onSaveMock' +
        'passing onSave equals onSaveMock and user click on input', () => {
        let onSaveMock = sinon.spy();
        let properties = {
            member: new MemberEntity(),
            onChange: undefined,
            onSave: onSaveMock,
            errors: new MemberErrors()
        };

        let memberFormWrapper = shallow(
            <MemberForm {...properties} />
        );

        let inputWrapper = memberFormWrapper.children().at(3);
        inputWrapper.simulate('click');


        expect(inputWrapper.type()).to.be.equals('input');
        expect(inputWrapper.prop('onClick')).to.be.a('function');
        expect(onSaveMock.calledOnce).to.be.true;
    });
});
