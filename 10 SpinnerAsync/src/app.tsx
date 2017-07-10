import * as React from 'react';
import { Header } from './components';
import { SpinnerContainer } from './common/components/spinner';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <SpinnerContainer />
      <Header />
      {props.children}
    </div>

  );
}
