var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var memberAPI_1 = require('../../api/memberAPI');
var memberRow_1 = require('./memberRow');
var MembersPage = (function (_super) {
    __extends(MembersPage, _super);
    function MembersPage(props) {
        _super.call(this, props);
        this.state = { members: [] };
    }
    MembersPage.prototype.componentDidMount = function () {
        var promise = memberAPI_1.default.getAllMembersAsync();
        promise.done(function (members) {
            this.setState({ members: members });
        }.bind(this));
    };
    MembersPage.prototype.render = function () {
        return (React.createElement("div", {"className": "row"}, React.createElement("h2", null, " Members Page"), React.createElement("table", {"className": "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Avatar"), React.createElement("th", null, "Id"), React.createElement("th", null, "Name"))), React.createElement("tbody", null, this.state.members.map(function (member) {
            return React.createElement(memberRow_1.default, {"key": member.id, "member": member});
        })))));
    };
    return MembersPage;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MembersPage;
//# sourceMappingURL=membersPage.js.map