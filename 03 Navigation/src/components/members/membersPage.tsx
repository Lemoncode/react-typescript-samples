import * as React from 'react';

interface Props extends React.Props<Authors> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class Authors extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="row">
          <h2> Members Page</h2>
        </div>
       );
  }
}
