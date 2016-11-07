import * as React from 'react';

interface Props extends React.Props<Header> {
}

// Nice tsx guide: http://www.typescriptlang.org/docs/handbook/jsx.html
export default class Header extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="row">
        <h2>Application Header</h2>
      </div>
    );
  }
}
