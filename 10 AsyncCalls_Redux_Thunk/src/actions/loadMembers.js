var memberAPI_1 = require('../api/memberAPI');
var assignMembers_1 = require('./assignMembers');
function loadMembers() {
    return function (dispatch) {
        return memberAPI_1.default.getAllMembersAsync().then(function (data) { return dispatch(assignMembers_1.default(data)); });
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadMembers;
//# sourceMappingURL=loadMembers.js.map