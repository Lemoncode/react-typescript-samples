import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import MemberPage from '../memberPage';
import MemberEntity from '../../../api/memberEntity';
import MemberForm from '../memberForm';
import MemberErrors from '../../../validations/memberFormErrors';
import * as toastr from 'toastr';
import { hashHistory } from 'react-router';


describe('MemberPage presentational component', () => {
    it('should renders a div with text equals "No data" and calls to initializeNewMember' +
        'passing required properties with default values', () => {
        let initializeNewMemberMock = sinon.spy();

        let properties = {
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals('div');
        expect(memberPageWrapper.text()).to.be.equals('No data');
        expect(initializeNewMemberMock.called).to.be.true;
    });

    //"sinson.test" make automatic cleanup instead of use sinon.restore
    //https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
    it('should calls to componentWillMount' +
        'passing required properties with default values', sinon.test(() => {
        //Just to get tsd instellisense
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let componentWillMountMock = sinon.stub(MemberPage.prototype, 'componentWillMount');

        let properties = {
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(componentWillMountMock.calledOnce).to.be.true;
    }).bind(this));

    it('should renders a div with text equals "No data" and calls to initializeNewMember' +
        'passing params property equals 1', () => {
        let initializeNewMemberMock = sinon.spy();
        let loadMemberMock = sinon.spy();

        let properties = {
            params: 1,
            initializeNewMember: initializeNewMemberMock,
            loadMember: loadMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals('div');
        expect(memberPageWrapper.text()).to.be.equals('No data');
        expect(initializeNewMemberMock.called).to.be.true;
        expect(loadMemberMock.called).to.be.false;
        expect(loadMemberMock.calledWith(1)).to.be.false;
    });

    it('should renders a div with text equals "No data" and calls to initializeNewMember' +
    'passing params property equals "test"', () => {
        let initializeNewMemberMock = sinon.spy();
        let loadMemberMock = sinon.spy();

        let properties = {
            params: "test",
            initializeNewMember: initializeNewMemberMock,
            loadMember: loadMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals('div');
        expect(memberPageWrapper.text()).to.be.equals('No data');
        expect(initializeNewMemberMock.called).to.be.true;
        expect(loadMemberMock.called).to.be.false;
        expect(loadMemberMock.calledWith(1)).to.be.false;
    });

    it('should renders a div with text equals "No data" and calls to initializeNewMember' +
        'passing params property equals { id: "test" }', () => {
        let initializeNewMemberMock = sinon.spy();
        let loadMemberMock = sinon.spy();

        let properties = {
            params: {
                id: "test"
            },
            initializeNewMember: initializeNewMemberMock,
            loadMember: loadMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals('div');
        expect(memberPageWrapper.text()).to.be.equals('No data');
        expect(initializeNewMemberMock.called).to.be.true;
        expect(loadMemberMock.called).to.be.false;
        expect(loadMemberMock.calledWith(1)).to.be.false;
    });

    it('should renders a div with text equals "No data" and calls to loadMember' +
        'passing params property equals { id: 1 }', () => {
        let initializeNewMemberMock = sinon.spy();
        let loadMemberMock = sinon.spy();

        let properties = {
            params: {
                id: 1
            },
            initializeNewMember: initializeNewMemberMock,
            loadMember: loadMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals('div');
        expect(memberPageWrapper.text()).to.be.equals('No data');
        expect(initializeNewMemberMock.called).to.be.false;
        expect(loadMemberMock.called).to.be.true;
        expect(loadMemberMock.calledWith(1)).to.be.true;
    });

    it('should renders a MemberForm with member equals { id: 1 } and calls to initializeNewMember' +
        'passing member equals { id: 1 } and params equals undefined', () => {
        let initializeNewMemberMock = sinon.spy();
        let member = new MemberEntity();
        member.id = 1;

        let properties = {
            initializeNewMember: initializeNewMemberMock,
            member: member,
            params: undefined
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals(MemberForm);
        expect(memberPageWrapper.prop('member')).not.to.be.undefined;
        expect(memberPageWrapper.prop('member').id).to.be.equals(member.id);
        expect(initializeNewMemberMock.called).to.be.true;
    });

    it('should renders a MemberForm with errors property equals undefined' +
        'passing errors equals undefined', () => {
        let initializeNewMemberMock = sinon.spy();
        let member = new MemberEntity();
        member.id = 1;

        let properties = {
            initializeNewMember: initializeNewMemberMock,
            member: member,
            errors: undefined
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals(MemberForm);
        expect(memberPageWrapper.prop('errors')).to.be.undefined;
    });

    it('should renders a MemberForm with errors property equals { login: "test" }' +
        'passing errors equals { login: "test" }', () => {
        let initializeNewMemberMock = sinon.spy();
        let member = new MemberEntity();
        member.id = 1;

        let errors = new MemberErrors();
        errors.login = "test";

        let properties = {
            initializeNewMember: initializeNewMemberMock,
            member: member,
            errors: errors
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(memberPageWrapper.type()).to.be.equals(MemberForm);
        expect(memberPageWrapper.prop('errors')).not.to.be.undefined;
        expect(memberPageWrapper.prop('errors').login).to.be.equals('test');
    });

    it('should renders a MemberForm and calls to fireValidationFieldValueChanged with ' +
        'arguments field equals "testField" and value equals "testValue" ' +
        'when user write in element with name property equals "testField" and ' +
        'value property equals "testValue"', () => {
        let initializeNewMemberMock = sinon.spy();
        let member = new MemberEntity();
        member.id = 1;

        let fireValidationMock = sinon.spy();

        let properties = {
            initializeNewMember: initializeNewMemberMock,
            member: member,
            fireValidationFieldValueChanged: fireValidationMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.simulate('change', {
            target: {
                name: "testField",
                value: "testValue"
            }
        })

        expect(fireValidationMock.called).to.be.true;
        expect(fireValidationMock.calledWith("testField", "testValue")).to.be.true;
    });

    it('should renders a MemberForm and calls to saveMember with arguments ' +
        'member equals member property and calls to preventDefault ' +
        'when user click on save button', () => {
        let initializeNewMemberMock = sinon.spy();
        let member = new MemberEntity();
        member.id = 1;

        let saveMemberMock = sinon.spy();
        let eventPreventDefaultMock = sinon.spy();

        let properties = {
            initializeNewMember: initializeNewMemberMock,
            member: member,
            saveMember: saveMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.simulate('save', {
            preventDefault: eventPreventDefaultMock
        })

        expect(saveMemberMock.called).to.be.true;
        expect(saveMemberMock.calledWith(member)).to.be.true;
        expect(eventPreventDefaultMock.called).to.be.true;
    });

    it('should does not call to componentWillReceiveProps' +
        'passing required properties with default values', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let componentWillReceivePropsMock = sinon.stub(MemberPage.prototype, 'componentWillReceiveProps');

        let properties = {
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(componentWillReceivePropsMock.calledOnce).to.be.false;
    }).bind(this));

    it('should does not call to componentWillReceiveProps' +
        'passing saveCompleted equals false', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let componentWillReceivePropsMock = sinon.stub(MemberPage.prototype, 'componentWillReceiveProps');

        let properties = {
            saveCompleted: false,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        expect(componentWillReceivePropsMock.calledOnce).to.be.false;
    }).bind(this));

    it('should calls to componentWillReceiveProps but does not calls to toastr.success()' +
        'passing saveCompleted equals false and setting root component props with ' +
        'saveCompleted property equals false', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let componentWillReceivePropsMock = sinon.stub(MemberPage.prototype, 'componentWillReceiveProps');
        let toastrMock = sinon.stub(toastr, 'success');

        let properties = {
            saveCompleted: false,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.setProps({
            saveCompleted: false
        });

        expect(componentWillReceivePropsMock.calledOnce).to.be.true;
        expect(toastrMock.calledOnce).to.be.false;
    }).bind(this));

    it('should calls to componentWillReceiveProps but does not calls to toastr.success()' +
        'passing saveCompleted equals true and setting root component props with ' +
        'saveCompleted property equals true', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let toastrMock = sinon.stub(toastr, 'success');

        let properties = {
            saveCompleted: true,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.setProps({
            saveCompleted: true
        });

        expect(toastrMock.calledOnce).to.be.false;
    }).bind(this));

    it('should calls to componentWillReceiveProps but does not calls to toastr.success()' +
        'passing saveCompleted equals true and setting root component props with ' +
        'saveCompleted property equals false', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let toastrMock = sinon.stub(toastr, 'success');

        let properties = {
            saveCompleted: true,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.setProps({
            saveCompleted: false
        });

        expect(toastrMock.calledOnce).to.be.false;
    }).bind(this));

    it('should calls to componentWillReceiveProps and toastr.success("Author saved.")' +
        'passing saveCompleted equals false and setting root component props with ' +
        'saveCompleted property equals true', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let resetSaveCompletedFlagMock = sinon.spy();
        let toastrMock = sinon.stub(toastr, 'success');

        let properties = {
            saveCompleted: false,
            resetSaveCompletedFlag: resetSaveCompletedFlagMock,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.setProps({
            saveCompleted: true
        });

        expect(toastrMock.calledOnce).to.be.true;
        expect(toastrMock.calledWith('Author saved.')).to.be.true;
    }).bind(this));

    it('should calls to hashHistory.push("/members")' +
        'passing saveCompleted equals false and setting root component props with ' +
        'saveCompleted property equals true', sinon.test(() => {
        let sinon: Sinon.SinonStatic = this;
        let initializeNewMemberMock = sinon.spy();
        let resetSaveCompletedFlagMock = sinon.spy();
        let hashHistoryMock = sinon.stub(hashHistory, 'push');

        let properties = {
            saveCompleted: false,
            resetSaveCompletedFlag: resetSaveCompletedFlagMock,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.setProps({
            saveCompleted: true
        });

        expect(hashHistoryMock.calledOnce).to.be.true;
        expect(hashHistoryMock.calledWith('/members')).to.be.true;
    }).bind(this));

    it('should calls to resetSaveCompletedFlag' +
        'passing saveCompleted equals false and setting root component props with ' +
        'saveCompleted property equals true', () => {
        let initializeNewMemberMock = sinon.spy();
        let resetSaveCompletedFlagMock = sinon.spy();

        let properties = {
            saveCompleted: false,
            resetSaveCompletedFlag: resetSaveCompletedFlagMock,
            initializeNewMember: initializeNewMemberMock
        };

        let memberPageWrapper = shallow(
            <MemberPage {...properties} />
        );

        memberPageWrapper.setProps({
            saveCompleted: true
        });

        expect(resetSaveCompletedFlagMock.calledOnce).to.be.true;
    });
});
