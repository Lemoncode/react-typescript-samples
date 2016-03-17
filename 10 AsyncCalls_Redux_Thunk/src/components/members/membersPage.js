var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var react_router_1 = require('react-router');
var memberRow_1 = require('./memberRow');
var loadMembers_1 = require('../../actions/loadMembers');
var MembersPage = (function (_super) {
    __extends(MembersPage, _super);
    function MembersPage() {
        _super.apply(this, arguments);
    }
    MembersPage.prototype.componentDidMount = function () {
        this.props.loadMembers();
    };
    MembersPage.prototype.render = function () {
        if (!this.props.members)
            return (React.createElement("div", null, "No data"));
        return (React.createElement("div", {"className": "row"}, React.createElement("h2", null, " Members Page"), React.createElement(react_router_1.Link, {"to": "/member"}, "New Member"), React.createElement("table", {"className": "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Avatar"), React.createElement("th", null, "Id"), React.createElement("th", null, "Name"))), React.createElement("tbody", null, this.props.members.map(function (member) {
            return React.createElement(memberRow_1.default, {"key": member.id, "member": member});
        })))));
    };
    return MembersPage;
})(React.Component);
var mapStateToProps = function (state) {
    return {
        members: state.members
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        loadMembers: function () { return dispatch(loadMembers_1.default()); }
    };
};
var ContainerMembersPage = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MembersPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContainerMembersPage;
//# sourceMappingURL=membersPage.js.map