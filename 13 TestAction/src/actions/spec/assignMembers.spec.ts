import { expect } from 'chai';
import assignMembers from '../assignMembers';
import MemberEntity from '../../api/memberEntity';

describe('assignMembers', () => {
  it('should return members action type: MEMBERS_ASSIGN and members: []', () => {
      // Arrange
      const membersInput = new Array<MemberEntity>();
      // Act
      let result = assignMembers(membersInput);
      // Assert

      expect(result.type).to.be.equal('MEMBERS_ASSIGN');
      expect(result.members.length).to.be.equal(0);
  });


  it('should return members action type: MEMBERS_ASSIGN and members: member Array', () => {
      // Arrange
      const membersInput = new Array<MemberEntity>();

      let member1 = new MemberEntity();
      let member2 = new MemberEntity();

      member1.login = 'test1';
      member2.login = 'test2';

      membersInput.push(member1);
      membersInput.push(member2);

      // Act
      let result = assignMembers(membersInput);
      // Assert

      expect(result.type).to.be.equal('MEMBERS_ASSIGN');
      expect(result.members.length).to.be.equal(2);
      expect(result.members[0].login).to.be.equal('test1');
      expect(result.members[1].login).to.be.equal('test2');
  });
});
