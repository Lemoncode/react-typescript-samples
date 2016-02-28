import MemberEntity from './memberEntity'
import MembersMockData from './memberMockData'
import * as _ from 'lodash'
// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
export default class MemberAPI {
  //This would be performed on the server in a real app. Just stubbing in.
  private _clone (item) {
  	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  // Just return a copy of the mock data
  getAllMembers() : Array<MemberEntity> {
		return this._clone(MembersMockData);
	}
}
