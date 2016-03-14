import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Header from './common/header'
import reducers  from '../reducers';
import * as reduxThunk from 'redux-thunk';
import Spinner from './common/spinner'

interface Props extends React.Props<App> {
}

// TODO: Hack, seems that tsd is out of date
// Check on this threads which approach to follow
// fix manually type definition (chekc to ask for pr), Check
// check other ways to import the module
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/6231
//import * as thunk from 'redux-thunk';
// https://github.com/gaearon/redux-thunk/issues/35
// https://github.com/Microsoft/TypeScript/issues/5565
//import thunkMiddleware = require("redux-thunk");

var myReduxThunk : any = reduxThunk;
let store = createStore(reducers
                        ,applyMiddleware(myReduxThunk.default)
            );

export default class App extends React.Component<Props, {}> {
   public render() {
       return (
         <Provider store={store}>
            <div className="container-fluid">
              <Spinner/>
              <Header/>
                {this.props.children}
              </div>
         </Provider>
       );
  }
}
