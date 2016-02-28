import * as React from 'react';

interface Props {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="row">
          <h2> About Page</h2>
        </div>
       );
  }
}
