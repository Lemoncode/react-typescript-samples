import * as React from 'react';
import './loadingSpinner.css';

import PropTypes from 'prop-types';
import { promiseTrackerHoc } from 'react-promise-tracker';


const InnerLoadingSpinerComponent:React.StatelessComponent<PropTypes> = (props) => {
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

 InnerLoadingSpinerComponent.propTypes = {
  trackedPromiseInProgress: PropTypes.bool.isRequired,
} 

export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);

