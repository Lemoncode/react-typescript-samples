import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '../textInput';

describe('Input presentational component', () =>{
    it('should renders a div element with class equals "form-group" and this div has 2 childrens ' +
        'passing required properties with undefined value', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        expect(textInputWrapper.type()).to.be.equals('div');
        expect(textInputWrapper.hasClass('form-group')).to.be.true;
        expect(textInputWrapper.hasClass('has-error')).to.be.false;
        expect(textInputWrapper.children()).to.have.length(2);
    });

    it('should renders a div element with class equals "form-group has-error" and this div has 2 childrens ' +
        'passing error equals "test"', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: 'test'
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        expect(textInputWrapper.type()).to.be.equals('div');
        expect(textInputWrapper.hasClass('form-group')).to.be.true;
        expect(textInputWrapper.hasClass('has-error')).to.be.true;
        expect(textInputWrapper.children()).to.have.length(2);
    });

    it('should renders a label element like first child with htmlFor property equals undefined ' +
        'and text equals empty passing name and label equals undefined', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        expect(textInputWrapper.children().at(0).type()).to.be.equals('label');
        expect(textInputWrapper.children().at(0).prop('htmlFor')).to.be.undefined;
        expect(textInputWrapper.children().at(0).text()).to.be.equals('');
    });

    it('should renders a label element like first child with htmlFor property equals "test name" ' +
        'and text equals "test label" passing name equals "test name" and label equals "test label"', () => {
        let props = {
            name: 'test name',
            label: 'test label',
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        expect(textInputWrapper.children().at(0).type()).to.be.equals('label');
        expect(textInputWrapper.children().at(0).prop('htmlFor')).to.be.equals('test name');
        expect(textInputWrapper.children().at(0).text()).to.be.equals('test label');
    });

    it('should renders a div element like second child class equals "field" ' +
        'passing required properties with undefined value', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        expect(textInputWrapper.children().at(1).type()).to.be.equals('div');
        expect(textInputWrapper.children().at(1).hasClass('field')).to.be.true;
    });

    it('should renders a div element like second child with 2 childrens inside input and div' +
        'passing required properties with undefined value', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        expect(textInputWrapper.children().at(1).type()).to.be.equals('div');
        expect(textInputWrapper.children().at(1).children()).to.have.length(2);
        expect(textInputWrapper.children().at(1).children().at(0).type()).to.be.equals('input');
        expect(textInputWrapper.children().at(1).children().at(1).type()).to.be.equals('div');
    });

    it('should renders an input with type property equals "text" class equals "form-control" ' +
        'and rest of the properties equals undefined passing required properties equals undefined', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let inputElementWrapper = textInputWrapper.children().at(1).children().at(0);
        expect(inputElementWrapper.type()).to.be.equals('input');
        expect(inputElementWrapper.prop('type')).to.be.equals('text');
        expect(inputElementWrapper.hasClass('form-control')).to.be.true;
        expect(inputElementWrapper.prop('name')).to.be.undefined;
        expect(inputElementWrapper.prop('placeholder')).to.be.undefined;
        expect(inputElementWrapper.prop('ref')).to.be.undefined;
        expect(inputElementWrapper.prop('value')).to.be.undefined;
        expect(inputElementWrapper.prop('onChange')).to.be.undefined;
    });

    it('should renders an input with name and ref properties equals "test"' +
        'passing name equals "test"', () => {
        let props = {
            name: 'test',
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let inputElementWrapper = textInputWrapper.children().at(1).children().at(0);
        expect(inputElementWrapper.type()).to.be.equals('input');
        expect(inputElementWrapper.prop('name')).to.be.equals('test');
    });

    it('should renders an input with placeholder property equals "test"' +
        'passing placeholder equals "test"', () => {
        let props = {
            name: undefined,
            placeholder: 'test',
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let inputElementWrapper = textInputWrapper.children().at(1).children().at(0);
        expect(inputElementWrapper.type()).to.be.equals('input');
        expect(inputElementWrapper.prop('placeholder')).to.be.equals('test');
    });

    it('should renders an input with value property equals "test"' +
        'passing value equals "test"', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: 'test',
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let inputElementWrapper = textInputWrapper.children().at(1).children().at(0);
        expect(inputElementWrapper.type()).to.be.equals('input');
        expect(inputElementWrapper.prop('value')).to.be.equals('test');
    });

    it('should renders an input with onChange property equals function ' +
        'passing mockedOnChange method', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: sinon.spy(),
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let inputElementWrapper = textInputWrapper.children().at(1).children().at(0);
        expect(inputElementWrapper.type()).to.be.equals('input');
        expect(inputElementWrapper.prop('onChange')).to.be.a('function');
        expect(props.onChange.called).to.be.false;
    });

    it('should renders an input with onChange property equals function and calls to onChange' +
        'passing mockedOnChange method when user write on input', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: sinon.spy(),
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let inputElementWrapper = textInputWrapper.children().at(1).children().at(0);
        inputElementWrapper.simulate('change');

        expect(inputElementWrapper.type()).to.be.equals('input');
        expect(inputElementWrapper.prop('onChange')).to.be.a('function');
        expect(props.onChange.calledOnce).to.be.true;
    });

    it('should renders an div with class equals "input" and text equals empty' +
        'passing error property equals undefined', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: undefined
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let divElementWrapper = textInputWrapper.children().at(1).children().at(1);

        expect(divElementWrapper.type()).to.be.equals('div');
        expect(divElementWrapper.hasClass('input')).to.be.true;
        expect(divElementWrapper.text()).to.be.equals('');
    });

    it('should renders an div with class equals "input" and text equals "test"' +
        'passing error property equals "test"', () => {
        let props = {
            name: undefined,
            label: undefined,
            onChange: undefined,
            value: undefined,
            error: 'test'
        };

        let textInputWrapper = shallow(
            <Input {...props} />
        );

        let divElementWrapper = textInputWrapper.children().at(1).children().at(1);

        expect(divElementWrapper.type()).to.be.equals('div');
        expect(divElementWrapper.hasClass('input')).to.be.true;
        expect(divElementWrapper.text()).to.be.equals('test');
    });
})
