import * as React from 'react';
import header from '../common/header';
import {Link} from 'react-router';

interface Props {
}

export default class About extends React.Component<Props, {}> {
   public render() {
       return (
          <div className="row">
            <h2>About Page</h2>
            <p>React Hot loader allows us to introduce changes in the application source code meanwhile we are running our web server and get the changes into our page without having to reload the browser and not loosing the application state.</p>
            <p>Redux dev tool is a chrome add-on that allows us to browse the state, replay actions, inject actions, export / import state...</p>
            <p>More info about how this sample works in readme.md</p>
            <Link to="/members">Members</Link>
          </div>
       );
  }
}
