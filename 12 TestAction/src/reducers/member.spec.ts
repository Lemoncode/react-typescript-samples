import {memberReducer} from './member';
import * as deepFreeze from 'deep-freeze';
import {MemberEntity} from '../model/memberEntity';
import {actionTypes} from '../common/constants/actionTypes';
import { MemberFieldChangePayload } from '../components/member/actions/memberFieldChange';


describe ('/reducers/member tests',()=>{
    it('should return an empty member when passing no undefined state and some action Type', () => {
        // Arrange
        const state= undefined;
        const action = {type:'some type'};

        // Act

        const nextState = memberReducer(state,action);

        // Assert
        expect (nextState.id).toEqual(-1);
        expect (nextState.login).toEqual('');
        expect (nextState.avatar_url).toEqual('');

    });

    it('should return same state without mutate it when passing state and some action type', () => {
        // Arrange
        const state: MemberEntity =  { id: 1, login: 'test login', avatar_url: 'test avatar_url' };
        const action = { type: 'some type' };
        deepFreeze(state);

        // Act
        const nextState = memberReducer(state, action);

        // Assert
        expect(nextState).toEqual(
            { id: 1, login: 'test login', avatar_url: 'test avatar_url' },
        );
    });

    it(`should return state when passing an undefined payload, actionTypes.FETCH_MEMBER_BY_ID_COMPLETED action type and member payload`, () => {
        // Arrange
        const state: MemberEntity =
            { id: 1, login: 'test login', avatar_url: 'test avatar_url' };

        const payload = undefined;

        const action = {
            type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
            payload,
        };
        deepFreeze(state);

        // Act
        const nextState = memberReducer(state, action);

        // Assert
        expect(nextState.id).toEqual(-1);
        expect(nextState.login).toEqual('');
        expect(nextState.avatar_url).toEqual('');
    });

    it(`should return updated state without mutate it when passing state and updated member, actionTypes.FETCH_MEMBER_BY_ID_COMPLETED action type and member payload`, () => {
        // Arrange
        const state: MemberEntity =
            { id: 1, login: 'test login', avatar_url: 'test avatar_url' };

        const payload = { id: 1, login: 'test login 2', avatar_url: 'test avatar_url 2' };

        const action = {
            type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
            payload,
        };
        deepFreeze(state);

        // Act
        const nextState = memberReducer(state, action);

        // Assert
        expect(nextState).toEqual(payload);
    });
    it(`should return updated state without mutate it when passing state and updated member, actionTypes.FETCH_MEMBER_BY_ID_COMPLETED action type and member payload`, () => {
        // Arrange
        const state: MemberEntity =
            { id: 1, login: 'test login', avatar_url: 'test avatar_url' };

        const payload = { id: 1, login: 'test login', avatar_url: 'test avatar_url' };

        const action = {
            type: actionTypes.SAVE_MEMBER,
            payload,
        };
        deepFreeze(state);

        // Act
        const nextState = memberReducer(state, action);

        // Assert
        expect(nextState).toEqual(payload);
    });
    it(`should return a new value for field login, actionTypes.UPDATE_MEMBER_FIELD action type and member payload with new login`, () => {
        // Arrange
        const state: MemberEntity =
            { id: 1, login: 'test login', avatar_url: 'test avatar_url' };

        const payload: MemberFieldChangePayload = {fieldValidationResult:{key:"login", type:"", succeeded:true, errorMessage:""}, value:"new login"};

        const action = {
            type: actionTypes.UPDATE_MEMBER_FIELD,
            payload,
        };
        deepFreeze(state);

        // Act
        const nextState = memberReducer(state, action);

        // Assert
        expect(nextState.login).toEqual("new login");
    });
    
    it(`should return a new value for field avatar_url, actionTypes.UPDATE_MEMBER_FIELD action type and member payload with new avatar_url`, () => {
        // Arrange
        const state: MemberEntity =
            { id: 1, login: 'test login', avatar_url: 'test avatar_url' };

        const payload: MemberFieldChangePayload = { fieldValidationResult: { key: "avatar_url", type: "", succeeded: true, errorMessage: "" }, value:"new avatar_url"};

        const action = {
            type: actionTypes.UPDATE_MEMBER_FIELD,
            payload,
        };
        deepFreeze(state);

        // Act
        const nextState = memberReducer(state, action);

        // Assert
        expect(nextState.avatar_url).toEqual("new avatar_url");
    });
    



});