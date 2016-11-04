import * as React from 'react';

import Header from './common/header';
import AboutPage from './about/aboutPage';

interface Props extends React.Props<App> {
}

// Nice tsx guide: http://www.typescriptlang.org/docs/handbook/jsx.html
export default class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <Header/>
        <AboutPage/>
      </div>
    );
  }
}
