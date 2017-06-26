import * as React from 'react';

interface Props {
  showSpinner: boolean;
}

export const SpinnerComponent: React.StatelessComponent<Props> = (props) => {
  return (
    props.showSpinner ?
      <div className="spinnerWrap">
        <div className="spinnerOverlay"></div>
        <div className="vertical-offset">
          <span>Loading...</span>
        </div>
      </div> :
      null
  );
};
