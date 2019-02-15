import { expect } from 'chai';
import assignMembers from '../assignMembers';
import MemberEntity from '../../api/memberEntity';

describe('assignMembers', () => {
  it('should return members action type: MEMBERS_ASSIGN and members: [] when passing an empty members Array', () => {
      // Arrange
      const members = new Array<MemberEntity>();

      // Act
      let result = assignMembers(members);

      // Assert
      expect(result.type).to.be.equal('MEMBERS_ASSIGN');
      expect(result.members.length).to.be.equal(0);
  });

  it('should return members action type: MEMBERS_ASSIGN and members: member Array with two items when passing ' +
        'a member Array with two items', () => {
      // Arrange
      const members = new Array<MemberEntity>();

      let member1 = new MemberEntity();
      let member2 = new MemberEntity();

      member1.login = 'test1';
      member2.login = 'test2';

      members.push(member1);
      members.push(member2);

      // Act
      let result = assignMembers(members);

      // Assert
      expect(result.type).to.be.equal('MEMBERS_ASSIGN');
      expect(result.members.length).to.be.equal(2);
      expect(result.members[0].login).to.be.equal('test1');
      expect(result.members[1].login).to.be.equal('test2');
  });
});
