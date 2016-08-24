import * as React from 'react';
import {Link} from 'react-router';

interface Props {
}

export default class Header extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse">
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
