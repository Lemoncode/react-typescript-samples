var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var header_1 = require('./common/header');
var reducers_1 = require('../reducers');
var redux_thunk_1 = require('redux-thunk');
var store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, {"store": store}, React.createElement("div", {"className": "container-fluid"}, React.createElement(header_1.default, null), this.props.children)));
    };
    return App;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=app.js.map