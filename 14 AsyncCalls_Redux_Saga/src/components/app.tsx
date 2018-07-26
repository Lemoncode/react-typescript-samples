import * as React from 'react';
import Header from './common/header';
import Spinner from './common/spinner';

interface Props extends React.Props<App> {
}


export default class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <Spinner />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
