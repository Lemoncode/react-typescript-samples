var memberMockData_1 = require('./memberMockData');
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
    return MemberAPI;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new MemberAPI();
//# sourceMappingURL=memberAPI.js.map