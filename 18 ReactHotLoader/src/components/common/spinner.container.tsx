import { connect } from 'react-redux';
import { httpInitializeDispatcher } from '../../actions/httpInitializeDispatcher';
import Spinner from './spinner';

let mapStateToProps = (state) => {
    return {
      showSpinner: state.http.httpCallsInProgress
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    initializeHttp: () => {return dispatch(httpInitializeDispatcher(dispatch))}
  }
}

let SpinnerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner)

export default SpinnerContainer;
