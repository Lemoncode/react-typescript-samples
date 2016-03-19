import * as React from 'react';
import Header from './common/header';


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
