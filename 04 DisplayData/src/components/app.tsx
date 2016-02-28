import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'

import Header from './common/header'
import aboutPage from './about/aboutPage';
import membersPage from './members/membersPage';


interface Props {
  children : any;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class App extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="container-fluid">
          <Header/>
          {this.props.children}
        </div>

       );
  }
}
