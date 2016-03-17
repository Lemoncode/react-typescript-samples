var memberAPI_1 = require('../api/memberAPI');
var loadMembers = function () {
    return {
        type: 'MEMBERS_LOAD',
        members: memberAPI_1.default.getAllMembers()
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadMembers;
//# sourceMappingURL=loadMembers.js.map