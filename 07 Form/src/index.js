var React = require('react');
var ReactDOM = require('react-dom');
var app_tsx_1 = require('./components/app.tsx');
var aboutPage_1 = require('./components/about/aboutPage');
var membersPage_1 = require('./components/members/membersPage');
var memberPage_1 = require('./components/member/memberPage');
var react_router_1 = require('react-router');
ReactDOM.render(React.createElement(react_router_1.Router, {"history": react_router_1.hashHistory}, React.createElement(react_router_1.Route, {"path": "/", "component": app_tsx_1.default}, React.createElement(react_router_1.IndexRoute, {"component": aboutPage_1.default}), React.createElement(react_router_1.Route, {"path": "/about", "component": aboutPage_1.default}), React.createElement(react_router_1.Route, {"path": "/members", "component": membersPage_1.default}), React.createElement(react_router_1.Route, {"path": "/member", "component": memberPage_1.default}))), document.getElementById('root'));
//# sourceMappingURL=index.js.map