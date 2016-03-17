var memberAPI_1 = require('../api/memberAPI');
var memberFormValidator_1 = require('../validations/memberFormValidator');
var saveMember = function (member) {
    var errorsSave = memberFormValidator_1.default.validateMember(member);
    if (errorsSave.isEntityValid) {
        memberAPI_1.default.saveAuthor(member);
    }
    return {
        type: 'MEMBER_SAVE',
        errors: errorsSave
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = saveMember;
//# sourceMappingURL=saveMember.js.map