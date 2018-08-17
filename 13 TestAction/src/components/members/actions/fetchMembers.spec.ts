import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as apiMember from '../../../api/member';
import { fetchMembers } from './fetchMembers';

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('members/list/actions/fetchMembers tests', () => {
    
         it('should call to apiMember.fetchMembers', (done) => {
        // Arrange
            const fetchMembersStub = jest.spyOn(apiMember.memberAPI, 'fetchMembers');

        // Act
            const store = getMockStore();
             store.dispatch<any>(fetchMembers())
                    .then(() => {
                // Assert
                        expect(fetchMembersStub).toHaveBeenCalled();
                        done();
                        });
        });
    });