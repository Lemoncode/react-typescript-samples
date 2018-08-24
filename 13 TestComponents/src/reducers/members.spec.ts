import { membersReducer } from './members';
import * as deepFreeze from 'deep-freeze';
import { MemberEntity } from '../model/memberEntity';
import { actionTypes } from '../common/constants/actionTypes';


describe('/reducers/member tests', () => {
    it('should return an empty member when passing no undefined state and some action Type', () => {
        // Arrange
        const state = undefined;
        const action = { type: 'some type' };

        // Act

        const nextState = membersReducer(state, action);

        // Assert
        expect(nextState).toEqual([]);    
    });

    it('should return same state without mutate it when passing state and some action type', () => {
        // Arrange
        const state: MemberEntity[] = [{ id: 1, login: 'test login', avatar_url: 'test avatar_url' }];
        const action = { type: 'some type' };
        deepFreeze(state);

        // Act
        const nextState = membersReducer(state, action);

        // Assert
        expect(nextState).toEqual(
            [{ id: 1, login: 'test login', avatar_url: 'test avatar_url' }]
        );
    });

    it('should return same state without mutate it when passing state and some action type', () => {
        // Arrange
        const state: MemberEntity[] = [{ id: 1, login: 'test login', avatar_url: 'test avatar_url' }];
        const action = { type: 'some type' };
        deepFreeze(state);

        // Act
        const nextState = membersReducer(state, action);

        // Assert
        expect(nextState).toEqual(
            [{ id: 1, login: 'test login', avatar_url: 'test avatar_url' }]
        );
    });

    it(`should return state without mutate it when passing state, actionTypes.FETCH_MEMBERS_COMPLETED action type and members payload`, () => {
        // Arrange
        const state: MemberEntity[] =
            [{ id: 1, login: 'test login', avatar_url: 'test avatar_url' }];

        const payload = [
                         { id: 2, login: 'test login 2', avatar_url: 'test avatar_url 2' },
                         { id: 3, login: 'test login 3', avatar_url: 'test avatar_url 3' }
                        ];

        const action = {
            type: actionTypes.FETCH_MEMBERS_COMPLETED,
            payload,
        };
        deepFreeze(state);

        // Act
        const nextState = membersReducer(state, action);

        // Assert
        expect(nextState).toEqual(payload);
    });



});