var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        _super.apply(this, arguments);
    }
    About.prototype.render = function () {
        return (React.createElement("div", {"className": "row"}, React.createElement("h2", null, " About Page"), React.createElement(react_router_1.Link, {"to": "/members"}, "Members")));
    };
    return About;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = About;
//# sourceMappingURL=aboutPage.js.map