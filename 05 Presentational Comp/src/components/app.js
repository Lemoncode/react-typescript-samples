var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var header_1 = require('./common/header');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", {"className": "container-fluid"}, React.createElement(header_1.default, null), this.props.children));
    };
    return App;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=app.js.map