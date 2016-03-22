var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var memberAPI_1 = require('../../api/memberAPI');
var MembersPage = (function (_super) {
    __extends(MembersPage, _super);
    function MembersPage(props) {
        _super.call(this, props);
        this.state = { members: [] };
    }
    MembersPage.prototype.componentWillMount = function () {
        this.state.members = memberAPI_1.default.getAllMembers();
    };
    MembersPage.prototype.render = function () {
        var CreateMemberRow = function (member) {
            return (React.createElement("tr", {"key": member.id}, React.createElement("td", null, React.createElement("img", {"src": member.avatar_url, "className": "avatar"})), React.createElement("td", null, React.createElement("span", null, member.id)), React.createElement("td", null, React.createElement("span", null, member.login))));
        };
        return (React.createElement("div", {"className": "row"}, React.createElement("h2", null, " Members Page"), React.createElement("table", {"className": "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Avatar"), React.createElement("th", null, "Id"), React.createElement("th", null, "Name"))), React.createElement("tbody", null, this.state.members.map(CreateMemberRow, this)))));
    };
    return MembersPage;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MembersPage;
//# sourceMappingURL=Members.js.map