import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Header> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class Header extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/members">Members</Link></li>
                </ul>
            </div>
          </nav>
        </div>
       );
  }
}
