var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var toastr = require('toastr');
var memberEntity_1 = require('./../../api/memberEntity');
var memberForm_1 = require('./memberForm');
var memberAPI_1 = require('../../api/memberAPI');
var objectAssign = require('object-assign');
var MemberPage = (function (_super) {
    __extends(MemberPage, _super);
    function MemberPage(props) {
        _super.call(this, props);
        this.state = {
            member: new memberEntity_1.default(),
            errors: {},
            dirty: false
        };
    }
    MemberPage.prototype.componentWillMount = function () {
        var memberId = this.props.params.id;
        if (memberId) {
            var memberIdNumber = parseInt(memberId);
            var newState = objectAssign({}, this.state, { dirty: false, member: memberAPI_1.default.getMemberById(memberIdNumber) });
            return this.setState(newState);
        }
    };
    MemberPage.prototype.setMemberState = function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.member[field] = value;
        var newState = objectAssign({}, this.state, { dirty: true, member: this.state.member });
        return this.setState(newState);
    };
    MemberPage.prototype.memberFormIsValid = function () {
        var formIsValid = true;
        this.state.errors = {};
        if (this.state.member.login.length < 3) {
            this.state.errors.login = 'Login must be at least 3 characters.';
            formIsValid = false;
        }
        var newState = objectAssign({}, this.state, { errors: this.state.errors });
        this.setState(newState);
        return formIsValid;
    };
    MemberPage.prototype.saveMember = function (event) {
        event.preventDefault();
        if (!this.memberFormIsValid()) {
            return;
        }
        memberAPI_1.default.saveAuthor(this.state.member);
        var newState = objectAssign({}, this.state, { dirty: true });
        this.setState(newState);
        toastr.success('Author saved.');
        react_router_1.hashHistory.push('/members');
    };
    MemberPage.prototype.render = function () {
        return (React.createElement(memberForm_1.default, {"member": this.state.member, "errors": this.state.errors, "onChange": this.setMemberState.bind(this), "onSave": this.saveMember.bind(this)}));
    };
    return MemberPage;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberPage;
//# sourceMappingURL=memberPage.js.map