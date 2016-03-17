import { expect } from 'chai';
import saveMember from '../saveMember';
import MemberEntity from '../../api/memberEntity';
import memberAPI from '../../api/memberAPI';
import MemberErrors from '../../validations/MemberFormErrors'
import MemberFormValidator from '../../validations/memberFormValidator';

describe('saveMember', () => {
  let sandbox = null;

  // TODO: Daniel this is not working, check if it I have something missing
  // right now moved to manually reseting spies
  // More info: http://stackoverflow.com/questions/8825870/sinon-js-attempted-to-wrap-ajax-which-is-already-wrapped/8826063
  /*
  beforeEach(() => {
      sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
      sandbox.restore()
  });
  */

  it('should return MEMBER_SAVE and errors.isEntityValid == true', () => {
      // Arrange
      const memberInput = new MemberEntity();
      const mockedValidationError = new MemberErrors();
      mockedValidationError.isEntityValid = true;

      sinon.stub(MemberFormValidator, 'validateMember').returns(mockedValidationError);
      sinon.stub(memberAPI, 'saveAuthor').returns(null);

      // Act
      let result = saveMember(memberInput);

      // Assert
      expect(result.type).to.be.equal('MEMBER_SAVE');
      expect(result.errors.isEntityValid).to.be.true;

      // Tear down spies
      // We could place this in afterEach but we don't want to
      // force all test to mock this
      const nonTypedMemberFormValidateMember = <any>MemberFormValidator.validateMember;
      nonTypedMemberFormValidateMember.restore();

      const nonTypedMemberApiSaveMember = <any>memberAPI.saveAuthor;
      nonTypedMemberApiSaveMember.restore();

  });


  it('should return MEMBER_SAVE and errors.isEntityValid == false', () => {
      // Arrange
      const memberInput = new MemberEntity();
      const mockedValidationError = new MemberErrors();
      mockedValidationError.isEntityValid = false;

      sinon.stub(MemberFormValidator, 'validateMember').returns(mockedValidationError);
      sinon.stub(memberAPI, 'saveAuthor').returns(null);

      // Act
      let result = saveMember(memberInput);

      // Assert
      expect(result.type).to.be.equal('MEMBER_SAVE');
      expect(result.errors.isEntityValid).to.be.false;

      // Tear down spies
      // We could place this in afterEach but we don't want to
      // force all test to mock this
      const nonTypedMemberFormValidateMember = <any>MemberFormValidator.validateMember;
      nonTypedMemberFormValidateMember.restore();

      const nonTypedMemberApiSaveMember = <any>memberAPI.saveAuthor;
      nonTypedMemberApiSaveMember.restore();
  });
});
