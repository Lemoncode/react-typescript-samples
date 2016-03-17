var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var react_router_1 = require('react-router');
var toastr = require('toastr');
var memberForm_1 = require('./memberForm');
var loadMember_1 = require('../../actions/loadMember');
var saveMember_1 = require('../../actions/saveMember');
var uiInputMember_1 = require('../../actions/uiInputMember');
var resetSaveCompleted_1 = require('../../actions/resetSaveCompleted');
var initializeNewMember_1 = require('../../actions/initializeNewMember');
var MemberPage = (function (_super) {
    __extends(MemberPage, _super);
    function MemberPage(props) {
        _super.call(this, props);
    }
    MemberPage.prototype.componentWillMount = function () {
        var memberId = this.props.params.id;
        if (memberId) {
            var memberIdNumber = parseInt(memberId);
            this.props.loadMember(memberIdNumber);
        }
        else {
            this.props.initializeNewMember();
        }
    };
    MemberPage.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.saveCompleted != nextProps.saveCompleted
            && nextProps.saveCompleted) {
            toastr.success('Author saved.');
            react_router_1.hashHistory.push('/members');
            this.props.resetSaveCompletedFlag();
        }
    };
    MemberPage.prototype.updateMemberFromUI = function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.props.fireValidationFieldValueChanged(field, value);
    };
    MemberPage.prototype.saveMember = function (event) {
        event.preventDefault();
        this.props.saveMember(this.props.member);
    };
    MemberPage.prototype.render = function () {
        if (!this.props.member)
            return (React.createElement("div", null, "No data"));
        return (React.createElement(memberForm_1.default, {"member": this.props.member, "errors": this.props.errors, "onChange": this.updateMemberFromUI.bind(this), "onSave": this.saveMember.bind(this)}));
    };
    return MemberPage;
})(React.Component);
var mapStateToProps = function (state) {
    return {
        member: state.member.member,
        errors: state.member.errors,
        saveCompleted: state.member.saveCompleted
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        loadMember: function (id) { return dispatch(loadMember_1.default(id)); },
        fireValidationFieldValueChanged: function (fieldName, value) { return dispatch(uiInputMember_1.default(fieldName, value)); },
        saveMember: function (member) { return dispatch(saveMember_1.default(member)); },
        resetSaveCompletedFlag: function () { return dispatch(resetSaveCompleted_1.default()); },
        initializeNewMember: function () {
            return dispatch(initializeNewMember_1.default());
        }
    };
};
var ContainerMemberPage = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MemberPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContainerMemberPage;
//# sourceMappingURL=memberPage.js.map