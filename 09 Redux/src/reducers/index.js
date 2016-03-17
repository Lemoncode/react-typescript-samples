var redux_1 = require('redux');
var memberReducer_1 = require('./memberReducer');
var membersReducer_1 = require('./membersReducer');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    member: memberReducer_1.default,
    members: membersReducer_1.default
});
//# sourceMappingURL=index.js.map