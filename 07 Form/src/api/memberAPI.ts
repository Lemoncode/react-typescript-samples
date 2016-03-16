import MemberEntity from './memberEntity'
import MembersMockData from './memberMockData'
import * as _ from 'lodash'
// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
export default class MemberAPI {
  private static _idSeed : number = 20;

  //This would be performed on the server in a real app. Just stubbing in.
  private static _clone (item) {
  	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  //This would be performed on the server in a real app. Just stubbing in.
  static _generateId() : number {
  	return this._idSeed++;
  };


  // Just return a copy of the mock data
  static getAllMembers() : Array<MemberEntity> {
		return this._clone(MembersMockData);
	}

  static saveAuthor(member: MemberEntity) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (member.id != -1) {
			var existingAuthorIndex = _.indexOf(MembersMockData, _.find(MembersMockData, {id: member.id}));
			MembersMockData.splice(existingAuthorIndex, 1, member);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			member.id = this._generateId();
			MembersMockData.push(this._clone(member));
		}

		return member;
	}

}
