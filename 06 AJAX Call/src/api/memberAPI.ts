import MemberEntity from './memberEntity'
import MembersMockData from './memberMockData'
import * as _ from 'lodash'
import * as $ from 'jquery'
import * as Q from 'q'

// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
export default class MemberAPI {
  //This would be performed on the server in a real app. Just stubbing in.
  private static _clone (item) {
  	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  // Just return a copy of the mock data
  static getAllMembers() : Array<MemberEntity> {
		return this._clone(MembersMockData);
	}

  //Q.Promise<Array<MemberEntity>
  static getAllMembersAsync() : Q.Promise<MemberEntity[]> {
    // Going more modern: check 'fetch' and ES6 Promise
    var deferred = Q.defer<Array<MemberEntity>>();

    $.getJSON('https://api.github.com/orgs/lemoncode/members', function(data) {
        // do something with data
        var members : Array<MemberEntity>;

        members = data.map((gitHubMember) => {
          var member : MemberEntity = new MemberEntity();

          member.id = gitHubMember.id;
          member.login = gitHubMember.login;
          member.avatar_url = gitHubMember.avatar_url;

          return member;
        });

        deferred.resolve(members);
    });

    return deferred.promise;
  }
}
