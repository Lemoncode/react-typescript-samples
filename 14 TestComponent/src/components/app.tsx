import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Header from './common/header';
import reducers  from '../reducers';
import ReduxThunk from 'redux-thunk';
import SpinnerContainer from './common/spinner.container';

interface Props extends React.Props<App> {
}

let store = createStore(
  reducers
  ,applyMiddleware(ReduxThunk)
);

export default class App extends React.Component<Props, {}> {
   public render() {
       return (
         <Provider store={store}>
            <div className="container-fluid">
              <SpinnerContainer/>
              <Header/>
                {this.props.children}
              </div>
         </Provider>
       );
  }
}
