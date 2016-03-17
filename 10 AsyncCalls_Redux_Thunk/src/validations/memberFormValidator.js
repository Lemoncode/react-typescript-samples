var memberFormErrors_1 = require('./memberFormErrors');
var memberFormValidator = (function () {
    function memberFormValidator() {
    }
    memberFormValidator.prototype.validateMember = function (member) {
        var memberFormErrors = new memberFormErrors_1.default();
        memberFormErrors.isEntityValid = true;
        if (member.login.length < 3) {
            memberFormErrors.login = 'Login must be at least 3 characters.';
            memberFormErrors.isEntityValid = false;
        }
        return memberFormErrors;
    };
    return memberFormValidator;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new memberFormValidator();
//# sourceMappingURL=memberFormValidator.js.map