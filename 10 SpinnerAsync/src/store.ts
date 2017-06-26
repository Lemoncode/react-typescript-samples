import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { httpMiddleware } from './middlewares';
import { state } from './reducers';

export const store = createStore(
  state,
  compose(
    applyMiddleware(
      reduxThunk,
      httpMiddleware,
    ),
    window["devToolsExtension"] ? window["devToolsExtension"]() : (f) => f,
  )
);
