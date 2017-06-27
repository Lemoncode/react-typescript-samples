import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { httpMiddleware } from './middlewares';
import { state, State } from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  reduxThunk,
  httpMiddleware,
];

export const store: Store<State> = createStore(
  state,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
