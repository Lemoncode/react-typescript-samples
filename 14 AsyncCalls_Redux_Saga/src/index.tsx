import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagaWatchers from './sagas/watchersSaga';
import App from './components/app';
import AboutPage from './components/about/aboutPage';
import MembersPage from './components/members/membersPage';
import MemberPage from './components/member/memberPage';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const nonTypedWindow: any = window;
const history = createHashHistory();
const connectedRouterMiddleware = routerMiddleware(history);

let store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware, reduxThunk, connectedRouterMiddleware),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )
);

sagaMiddleware.run(sagaWatchers);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={AboutPage} />

        <Route path="/about" component={AboutPage} />
        <Route path="/members" component={MembersPage} />
        <Route path="/member" component={MemberPage} />
        <Route path="/memberEdit/:id" component={MemberPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
