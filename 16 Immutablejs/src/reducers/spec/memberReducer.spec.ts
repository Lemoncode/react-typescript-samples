import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { memberReducer, MemberState } from '../memberReducer';
import MemberEntity from '../../api/memberEntity';
import MemberFormErrors from "../../validations/memberFormErrors";

describe('memberReducer', () => {
    it('should return new MemberState with default values when passing initialState equals undefined and action equals {}', () => {
        let initialState = undefined;
        let action = {};

        let finalState = memberReducer(initialState, action);

        expect(finalState).not.to.be.undefined;
        expect(finalState.member).not.to.be.undefined;
        expect(finalState.member.id).to.be.equal(-1);
        expect(finalState.member.login).to.be.empty;
        expect(finalState.member.avatar_url).to.be.empty;
        expect(finalState.memberId).to.be.equal(-1);
        expect(finalState.isValid).to.be.false;
        expect(finalState.saveCompleted).to.be.false;
        expect(finalState.errors).not.to.be.undefined;
        expect(finalState.errors.id).to.be.empty;
        expect(finalState.errors.login).to.be.empty;
        expect(finalState.errors.avatar_url).to.be.empty;
        expect(finalState.errors.isEntityValid).to.be.undefined;
    });

    it('should return new MemberState with same values when passing initialState with MemberState.member.id equals 2 and action equals {}', () => {
        let initialState = new MemberState();
        initialState.member.id = 2;
        let action = {};

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.id).to.be.equal(2);
    });

    it('should return new MemberState with default values when passing initialState with MemberState.member.id equals 2 and '+
        'action equals { type: "MEMBER_INITIALIZE_NEW" }', () => {
        let initialState = new MemberState();
        initialState.member.id = 2;

        let action = {
            type: "MEMBER_INITIALIZE_NEW"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.id).to.be.equal(-1);
    });

    it('should return new MemberState with isValid equals false when passing initialState with MemberState.IsValid equals true and '+
        'action equals { type: "MEMBER_INITIALIZE_NEW" }', () => {
        let initialState = new MemberState();
        initialState.isValid = true;

        let action = {
            type: "MEMBER_INITIALIZE_NEW"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.isValid).to.be.false;
    });

    it('should return new MemberState with member equals action.member values when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_LOAD", member: member }', () => {
        let initialState = new MemberState();

        let member = new MemberEntity();
        member.id = 3;
        member.login = "test";

        let action = {
            type: "MEMBER_LOAD",
            member: member
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.id).to.be.equal(3);
        expect(finalState.member.login).to.be.equal("test");
        expect(finalState.errors.id).to.be.empty;
    });

    it('should return new MemberState with isValid equals true when passing initialState with MemberState.IsValid equals false and '+
        'action equals { type: "MEMBER_LOAD", member: new MemberEntity() }', () => {
        let initialState = new MemberState();
        initialState.isValid = false;

        let member = new MemberEntity();

        let action = {
            type: "MEMBER_LOAD",
            member: member
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.isValid).to.be.true;
    });

    it('should return new MemberState with member.id equals 2 when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_UI_INPUT", fieldName: "id", value: 2 }', () => {
        let initialState = new MemberState();
        let action = {
            type: "MEMBER_UI_INPUT",
            fieldName: "id",
            value: 2
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.id).to.be.equal(2);
    });

    it('should return new MemberState with member.id equals 2 when passing initialState with member.id equals 1 and '+
        'action equals { type: "MEMBER_UI_INPUT", fieldName: "id", value: 2 }', () => {
        let initialState = new MemberState();
        initialState.member.id = 1;

        let action = {
            type: "MEMBER_UI_INPUT",
            fieldName: "id",
            value: 2
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.id).to.be.equal(2);
    });

    it('should return new MemberState with member.login equals "test" when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_UI_INPUT", fieldName: "login", value: "test" }', () => {
        let initialState = new MemberState();
        let action = {
            type: "MEMBER_UI_INPUT",
            fieldName: "login",
            value: "test"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.login).to.be.equal("test");
    });

    it('should return new MemberState with member.login equals "test" when passing initialState with member.login equals "value" and '+
        'action equals { type: "MEMBER_UI_INPUT", fieldName: "login", value: "test" }', () => {
        let initialState = new MemberState();
        initialState.member.login = "value";

        let action = {
            type: "MEMBER_UI_INPUT",
            fieldName: "login",
            value: "test"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.login).to.be.equal("test");
    });

    it('should return new MemberState with member.avatar_url equals "test" when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_UI_INPUT", fieldName: "avatar_url", value: "test" }', () => {
        let initialState = new MemberState();
        let action = {
            type: "MEMBER_UI_INPUT",
            fieldName: "avatar_url",
            value: "test"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.avatar_url).to.be.equal("test");
    });

    it('should return new MemberState with member.avatar_url equals "test" when passing initialState with member.avatar_url equals "value" and '+
        'action equals { type: "MEMBER_UI_INPUT", fieldName: "avatar_url", value: "test" }', () => {
        let initialState = new MemberState();
        initialState.member.avatar_url = "value";

        let action = {
            type: "MEMBER_UI_INPUT",
            fieldName: "avatar_url",
            value: "test"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.member.avatar_url).to.be.equal("test");
    });

    it('should return new MemberState with saveCompleted equals true when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_SAVE", errors: { isEntityValid: true } }', () => {
        let initialState = new MemberState();

        let action = {
            type: "MEMBER_SAVE",
            errors: {
                isEntityValid: true
            }
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.saveCompleted).to.be.true;
    });

    it('should return new MemberState with isValid equals false when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_SAVE", errors: { isEntityValid: false } }', () => {
        let initialState = new MemberState();

        let action = {
            type: "MEMBER_SAVE",
            errors: {
                isEntityValid: false
            }
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.isValid).to.be.false;
    });

    it('should return new MemberState with errors.login equals "testError" when passing initialState equals new MemberState() and '+
        'action equals { type: "MEMBER_SAVE", errors: { isEntityValid: false, login: "testError" } }', () => {
        let initialState = new MemberState();

        let action = {
            type: "MEMBER_SAVE",
            errors: {
                isEntityValid: false,
                login: "testError"
            }
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.isValid).to.be.false;
        expect(finalState.errors.login).to.be.equal("testError");
        expect(finalState.errors.isEntityValid).to.be.false;
    });

    it('should return new MemberState with saveCompleted equals false when passing initialState with saveCompleted equals false and '+
        'action equals { type: "MEMBER_RESET_SAVE_COMPLETED" }', () => {
        let initialState = new MemberState();
        initialState.saveCompleted = false;

        let action = {
            type: "MEMBER_RESET_SAVE_COMPLETED"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.saveCompleted).to.be.false;
    });

    it('should return new MemberState with saveCompleted equals false when passing initialState with saveCompleted equals true and '+
        'action equals { type: "MEMBER_RESET_SAVE_COMPLETED" }', () => {
        let initialState = new MemberState();
        initialState.saveCompleted = true;

        let action = {
            type: "MEMBER_RESET_SAVE_COMPLETED"
        };

        deepFreeze(initialState);
        let finalState = memberReducer(initialState, action);

        expect(finalState.saveCompleted).to.be.false;
    });
})
