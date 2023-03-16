import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../app';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


export * from "./hello"
export * from "./nameEdit"
export * from "./colorBrowser"
export * from './colorPicker'
export * from './sidebar'