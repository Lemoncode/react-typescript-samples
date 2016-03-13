import * as React from 'react';
import { connect } from 'react-redux'

interface Props {
  showSpinner : boolean;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class Spinner extends React.Component<Props, {}> {
   /*public constructor()
   {

   }*/

   public render() {
       return (
        <div className="row">
          <span>Loading ... (add a better indicator later on)</span>
        </div>
       );
  }
}
