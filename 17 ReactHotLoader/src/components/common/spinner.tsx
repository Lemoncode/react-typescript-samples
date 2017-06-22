import * as React from 'react';

interface Props {
  showSpinner? : boolean;
  initializeHttp? : () => void;
}

export default class Spinner extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);
    this.props.initializeHttp();
  }

   public render() {
        if (!this.props.showSpinner) {
          return null;
        }

        return (
          <div className="spinnerWrap">
            <div className="spinnerOverlay"></div>
            <div className="vertical-offset">
              <div id="spinner">
                Loading...
              </div>
            </div>
          </div>
        );
  }
}
