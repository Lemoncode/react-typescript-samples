import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { saveMemberAction } from './saveMember';
import { memberFormValidation } from '../memberFormValidation';
import { MemberEntity } from '../../../model/memberEntity';



const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('member/actions/saveMember tests', () => {

    it('should call to apiMembers.SAVE_MEMBER with value', (done) => {
        // Arrange

        const member: MemberEntity = {
            id: 12345,
            avatar_url: "avatar test",
            login: "login test"
        }

        const validateFormStub = jest.spyOn(memberFormValidation, 'validateForm');

        //act
        const store = getMockStore();
        store.dispatch<any>(saveMemberAction(member))
            .then(() => {
                expect(validateFormStub).toHaveBeenCalledWith(member);
                done();
            });
    });

    it('should call to apiMembers.SAVE_MEMBER with no value. Returning error', (done) => {
        // Arrange

        const member: MemberEntity = {
            id: 12345,
            avatar_url: "avatar test",
            login: "login test"
        }

        const fieldName = "id";
        const value = undefined;
        const validateFormStub = jest.spyOn(memberFormValidation, 'validateForm').mockRejectedValue(new Error("some error message"));

        //act
        const store = getMockStore();
        store.dispatch<any>(saveMemberAction(member))
            .catch((e: Error) => {
                expect(validateFormStub).toHaveBeenCalledWith(member);
                expect(e.message).toEqual("some error message");
                done();
            });
    });

});