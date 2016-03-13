import MemberEntity from './memberEntity'
import MembersMockData from './memberMockData'
import * as _ from 'lodash'
import * as $ from 'jquery'
import * as Q from 'q'
import http from '../http/http';

// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
class MemberAPI {
  private _idSeed : number;

  public constructor() {
    this._idSeed = 20;
  }

  //This would be performed on the server in a real app. Just stubbing in.
  private _clone (item) {
  	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  //This would be performed on the server in a real app. Just stubbing in.
  _generateId() : number {
  	return this._idSeed++;
  };


  // Just return a copy of the mock data
  getAllMembers() : Array<MemberEntity> {
		return this._clone(MembersMockData);
	}

  // Not 100% clean we have to pass the dispatcher here
  // TODO: Enhance proposal, if this is a singleton we can
  // just initialize http with the dispatcher in a entry
  // point (app init or something like that)
  getAllMembersAsync(dispatcher) : Q.Promise<MemberEntity[]> {
    // Going more modern: check 'fetch' and ES6 Promise
    var deferred = Q.defer<Array<MemberEntity>>();

    // TODO: Only handling success, pending handling error
    http.Get(dispatcher, 'https://api.github.com/orgs/lemoncode/members').then(
        function(data) {
          var members : Array<MemberEntity>;

          members = data.map((gitHubMember) => {
            var member : MemberEntity = new MemberEntity();

            member.id = gitHubMember.id;
            member.login = gitHubMember.login;
            member.avatar_url = gitHubMember.avatar_url;

            return member;
          });

          deferred.resolve(members);
        }
    );

    /*
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
    });*/

    return deferred.promise;
  }


  getMemberById(id : number) : MemberEntity {
		var member = _.find(MembersMockData, {id: id});
		return this._clone(member);
	}

  saveAuthor(member: MemberEntity) {
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

export default new MemberAPI();
