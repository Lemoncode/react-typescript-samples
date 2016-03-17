import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { MemberReducer, MemberState } from '../memberReducer';
import MemberEntity from '../../api/memberEntity';
import MemberFormErrors from "../../validations/memberFormErrors";

describe('memberReducer', () => {
    it('should return MemberState with default values when passing initialState equals undefined and action equals {}', () => {
        let initialState = undefined;
        let action = {};

        let finalState = MemberReducer(initialState, action);

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
        let finalState = MemberReducer(initialState, action);

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
        let finalState = MemberReducer(initialState, action);

        expect(finalState.member.id).to.be.equal(-1);
    });
})
