import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { memberFieldChangeAction } from './memberFieldChange';
import {MemberEntity} from '../../../model/memberEntity';
import { memberFormValidation } from '../memberFormValidation';


const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('member/actions/memberFieldChange tests', () => {

    it('should call to memberFormValidation.validateField with value', (done) => {
        // Arrange
        
        const member: MemberEntity = {
            id: 12345,
            avatar_url: "avatar test",
            login: "login test"
        }

        const fieldName = "field test";
        const value = 12345; 
        const validateFormStub = jest.spyOn(memberFormValidation, 'validateField');

        //act
        const store = getMockStore();       
        store.dispatch<any>(memberFieldChangeAction(member,fieldName, value))
            .then(()=>{
                    expect(validateFormStub).toHaveBeenCalledWith(member, fieldName, value);
                    done();
                });      
    }); 

    it('should call to memberFormValidation.validateField with no value. Returning error', (done) => {
        // Arrange

        const member: MemberEntity = {
            id: 12345,
            avatar_url: "avatar test",
            login: "login test"
        }

        const fieldName = "id"
        const value = undefined;
        const validateFormStub = jest.spyOn(memberFormValidation, 'validateField').mockRejectedValue(new Error ("some error message"));

        //act
        const store = getMockStore();
        store.dispatch<any>(memberFieldChangeAction(member, fieldName, value))
            .catch((e:Error) => {
                expect(validateFormStub).toHaveBeenCalledWith(member, fieldName, value);
                expect(e.message).toEqual("some error message");
                done();
            });
    }); 

});