import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as apiMember from '../../../api/member';
import { fetchMemberById } from './fetchMemberById';

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('member/actions/fetchMemberById tests', () => {

    it('should call to apiMember.fetchMemberById', (done) => {
        // Arrange
        const fetchMemberByIdStub = jest.spyOn(apiMember.memberAPI, 'fetchMemberById');

        const id = 1457912;

        // Act
        const store = getMockStore();
        store.dispatch<any>(fetchMemberById(id))
            .then(() => {
                // Assert
                expect(fetchMemberByIdStub).toHaveBeenCalled();
                done();
            });
    });
});