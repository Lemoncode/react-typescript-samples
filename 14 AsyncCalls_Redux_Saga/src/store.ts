import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
import createSagaMiddleware from 'redux-saga';
import membersSagaWatcher from './sagas/membersSagaWatcher';

const sagaMiddleware = createSagaMiddleware();

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk, sagaMiddleware),
  )
);
console.log("Estoy en store");
sagaMiddleware.run(membersSagaWatcher);
