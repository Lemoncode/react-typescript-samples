var memberAPI_1 = require('../api/memberAPI');
var loadMember = function (id) {
    return {
        type: 'MEMBER_LOAD',
        member: memberAPI_1.default.getMemberById(id)
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadMember;
//# sourceMappingURL=loadMember.js.map