var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement("div", {"className": "row"}, React.createElement("nav", {"className": "navbar navbar-default"}, React.createElement("div", {"className": "collapse navbar-collapse", "id": "bs-example-navbar-collapse-1"}, React.createElement("ul", {"className": "nav navbar-nav"}, React.createElement("li", null, React.createElement(react_router_1.Link, {"to": "/about"}, "About")), React.createElement("li", null, React.createElement(react_router_1.Link, {"to": "/members"}, "Members")))))));
    };
    return Header;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
//# sourceMappingURL=header.js.map