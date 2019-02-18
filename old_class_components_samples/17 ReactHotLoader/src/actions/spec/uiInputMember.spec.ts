import { expect } from 'chai';
import { uiInputMember } from '../uiInputMember';

describe('uiInputMember', () => {
  it('should returns an action equals { type: "MEMBER_UI_INPUT", fieldName: undefined, value: undefined } ' +
    'when passing fieldName equals undefined and value equals undefined', () => {
      //Arrange
      let fieldName = undefined;
      let value = undefined;

      //Act
      let result = uiInputMember(fieldName, value);

      //Assert
      expect(result.type).to.be.equals("MEMBER_UI_INPUT");
      expect(result.fieldName).to.be.undefined;
      expect(result.value).to.be.undefined;
    });

  it('should returns an action equals { type: "MEMBER_UI_INPUT", fieldName: null, value: null } ' +
    'when passing fieldName equals null and value equals null', () => {
      //Arrange
      let fieldName = null;
      let value = null;

      //Act
      let result = uiInputMember(fieldName, value);

      //Assert
      expect(result.type).to.be.equals("MEMBER_UI_INPUT");
      expect(result.fieldName).to.be.null;
      expect(result.value).to.be.null;
    });

  it('should returns an action equals { type: "MEMBER_UI_INPUT", fieldName: "test", value: 1 } ' +
    'when passing fieldName equals "test" and value equals 1', () => {
      //Arrange
      let fieldName = "test";
      let value = 1;

      //Act
      let result = uiInputMember(fieldName, value);

      //Assert
      expect(result.type).to.be.equals("MEMBER_UI_INPUT");
      expect(result.fieldName).to.be.equals("test");
      expect(result.value).to.be.equals(1);
    });
});
