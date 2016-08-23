import * as React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Header from './common/header';
import reducers  from '../reducers';
import ReduxThunk from 'redux-thunk';
import SpinnerContainer from './common/spinner.container';

interface Props extends React.Props<App> {
}

const nonTypedWindow : any = window;

let store = createStore(
  reducers,
   compose(
     applyMiddleware(ReduxThunk)
     ,nonTypedWindow.devToolsExtension ? nonTypedWindow.devToolsExtension() : f => f
   )
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
