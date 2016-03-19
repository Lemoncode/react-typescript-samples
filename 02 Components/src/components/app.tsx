import * as React from 'react';
import Header from './common/header';
import AboutPage from './about/aboutPage';

interface Props {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
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
