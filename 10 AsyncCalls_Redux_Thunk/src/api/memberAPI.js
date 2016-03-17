var memberEntity_1 = require('./memberEntity');
var memberMockData_1 = require('./memberMockData');
var _ = require('lodash');
var $ = require('jquery');
var Q = require('q');
var MemberAPI = (function () {
    function MemberAPI() {
        this._idSeed = 20;
    }
    MemberAPI.prototype._clone = function (item) {
        return JSON.parse(JSON.stringify(item));
    };
    ;
    MemberAPI.prototype._generateId = function () {
        return this._idSeed++;
    };
    ;
    MemberAPI.prototype.getAllMembers = function () {
        return this._clone(memberMockData_1.default);
    };
    MemberAPI.prototype.getAllMembersAsync = function () {
        var deferred = Q.defer();
        $.getJSON('https://api.github.com/orgs/lemoncode/members', function (data) {
            var members;
            members = data.map(function (gitHubMember) {
                var member = new memberEntity_1.default();
                member.id = gitHubMember.id;
                member.login = gitHubMember.login;
                member.avatar_url = gitHubMember.avatar_url;
                return member;
            });
            deferred.resolve(members);
        });
        return deferred.promise;
    };
    MemberAPI.prototype.getMemberById = function (id) {
        var member = _.find(memberMockData_1.default, { id: id });
        return this._clone(member);
    };
    MemberAPI.prototype.saveAuthor = function (member) {
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        if (member.id != -1) {
            var existingAuthorIndex = _.indexOf(memberMockData_1.default, _.find(memberMockData_1.default, { id: member.id }));
            memberMockData_1.default.splice(existingAuthorIndex, 1, member);
        }
        else {
            member.id = this._generateId();
            memberMockData_1.default.push(this._clone(member));
        }
        return member;
    };
    return MemberAPI;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new MemberAPI();
//# sourceMappingURL=memberAPI.js.map