import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Header from './common/header';
import reducers  from '../reducers';
import createSagaMiddleware from 'redux-saga'
import sagaWatchers from '../sagas/watchersSaga';

interface Props extends React.Props<App> {
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


let store = createStore(
  reducers
  ,applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaWatchers);

export default class App extends React.Component<Props, {}> {
   public render() {
       return (
         <Provider store={store}>
            <div className="container-fluid">
              <Header/>
                {this.props.children}
              </div>
         </Provider>
       );
  }
}
