var memberEntity_1 = require("../api/memberEntity");
var objectAssign = require('object-assign');
var memberFormErrors_1 = require("../validations/memberFormErrors");
var emptyMemberEntity = new memberEntity_1.default();
var MemberState = (function () {
    function MemberState() {
        this.member = new memberEntity_1.default();
        this.memberId = -1;
        this.errors = new memberFormErrors_1.default();
        this.isValid = false;
        this.saveCompleted = false;
    }
    return MemberState;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = new MemberState(); }
    var newState = null;
    switch (action.type) {
        case 'MEMBER_INITIALIZE_NEW':
            newState = objectAssign({}, state, { member: new memberEntity_1.default(), errors: new memberFormErrors_1.default(), isValid: false });
            return newState;
        case 'MEMBER_LOAD':
            newState = objectAssign({}, state, { dirty: false, member: action.member, errors: new memberFormErrors_1.default(), isValid: true });
            return newState;
        case 'MEMBER_UI_INPUT':
            var fieldName = action['fieldName'];
            var value = action['value'];
            var newMember = objectAssign({}, state.member, {});
            newMember[fieldName] = value;
            newState = objectAssign({}, state, { member: newMember, dirty: true });
            return newState;
        case 'MEMBER_SAVE':
            if (action.errors.isEntityValid) {
                newState = objectAssign({}, state, { saveCompleted: true });
            }
            else {
                newState = objectAssign({}, state, { isValid: action.errors.isEntityValid, errors: action.errors });
            }
            return newState;
        case 'MEMBER_RESET_SAVE_COMPLETED':
            newState = objectAssign({}, state, { saveCompleted: false });
            return newState;
        default:
            return state;
    }
};
//# sourceMappingURL=memberReducer.js.map