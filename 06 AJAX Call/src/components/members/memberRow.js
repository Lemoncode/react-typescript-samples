var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var MemberRow = (function (_super) {
    __extends(MemberRow, _super);
    function MemberRow(props) {
        _super.call(this, props);
    }
    MemberRow.prototype.render = function () {
        return (React.createElement("tr", null, React.createElement("td", null, React.createElement("img", {"src": this.props.member.avatar_url, "className": "avatar"})), React.createElement("td", null, React.createElement("span", null, this.props.member.id)), React.createElement("td", null, React.createElement("span", null, this.props.member.login))));
    };
    return MemberRow;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberRow;
//# sourceMappingURL=memberRow.js.map