var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var textInput_1 = require('./../common/textInput');
var MemberForm = (function (_super) {
    __extends(MemberForm, _super);
    function MemberForm(props) {
        _super.call(this, props);
    }
    MemberForm.prototype.render = function () {
        return (React.createElement("form", null, React.createElement("h1", null, " Manage member "), React.createElement(textInput_1.default, {"name": "login", "label": "Login", "value": this.props.member.login, "onChange": this.props.onChange, "error": this.props.errors.login}), React.createElement(textInput_1.default, {"name": "avatar_url", "label": "Avatar Url", "value": this.props.member.avatar_url, "onChange": this.props.onChange, "error": this.props.errors.avatar_rul}), React.createElement("input", {"type": "submit", "value": "Save", "className": "btn btn-default", "onClick": this.props.onSave})));
    };
    return MemberForm;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberForm;
//# sourceMappingURL=memberForm.js.map