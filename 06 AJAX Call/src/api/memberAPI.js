var memberEntity_1 = require('./memberEntity');
var memberMockData_1 = require('./memberMockData');
var $ = require('jquery');
var Q = require('q');
var MemberAPI = (function () {
    function MemberAPI() {
    }
    MemberAPI.prototype._clone = function (item) {
        return JSON.parse(JSON.stringify(item));
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
    return MemberAPI;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new MemberAPI();
//# sourceMappingURL=memberAPI.js.map