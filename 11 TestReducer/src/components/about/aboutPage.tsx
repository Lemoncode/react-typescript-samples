import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

export default class About extends React.Component<Props, {}> {
   public render() {
       return (
          <div className="row">
            <h2> About Page</h2>
            <Link to="/members">Members</Link>
          </div>
       );
  }
}
