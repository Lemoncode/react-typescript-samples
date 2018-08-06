import * as React from 'react';
import './loadingSpinner.css';
import { promiseTrackerHoc } from 'react-promise-tracker';

interface myProps {
  trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinerComponent: React.StatelessComponent<myProps> = (props) => {
   if (props.trackedPromiseInProgress === true) {
    return (
      <div className="loading">
        <div className="loading__background">
          <div className="loading__backdrop">
            <div className="loading__box">
              <div className="loading__icon"></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else { return null } 
}

export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);

