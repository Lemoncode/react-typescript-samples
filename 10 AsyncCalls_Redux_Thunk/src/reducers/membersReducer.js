Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'MEMBERS_ASSIGN':
            return action.members.slice();
        default:
            return state;
    }
};
//# sourceMappingURL=membersReducer.js.map