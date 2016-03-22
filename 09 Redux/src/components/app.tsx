import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from './common/header'
import reducers from '../reducers';

interface Props extends React.Props<App> {
}

let store = createStore(reducers);

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
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
