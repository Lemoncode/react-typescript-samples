import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { SpinnerComponent } from './spinner';

const mapStateToProps = (state: State) => ({
  showSpinner: state.http.inProgress,
});

export const SpinnerContainer = connect(
  mapStateToProps,
)(SpinnerComponent);
