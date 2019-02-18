import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
          <div className="row">
            <h2> About Page</h2>
            <p>This sample takes as starting point sample "10 AsyncCalls_Redux_Thunk"</p>
            <p>In this sample we remove the memberPage method "componentWillReceiveProps"
            and we start handling toast notifications and navigation after save by using
            Middleware.
            </p>
            <p>By doing this we simplify the logic of the memberPage presentational Component
            and build Middleware logic that could be reused by other pages.
            </p>
          </div>
       );
  }
}
