import * as React from 'react';

interface Props {
  showSpinner: boolean;
}

export const SpinnerComponent: React.StatelessComponent<Props> = (props) => {
  return (
    props.showSpinner ?
      <div>
        <div className="spinnerOverlay" />
        <div className="spinner">
          <span>Loading...</span>
        </div>
      </div> :
      null
  );
};
