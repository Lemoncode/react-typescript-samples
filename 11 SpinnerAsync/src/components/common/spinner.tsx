import * as React from 'react';
import { connect } from 'react-redux';
import httpInitializeDispatcher from '../../actions/httpInitializeDispatcher';

interface Props {
  showSpinner? : boolean;
  initializeHttp? : () => void;
}

class spinner extends React.Component<Props, {}> {
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

// Container

const mapStateToProps = (state) => {
    return {
      showSpinner: state.http.httpCallsInProgress
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    initializeHttp: () => {return dispatch(httpInitializeDispatcher(dispatch))}
  }
}

const ContainerSpinnerComponent = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(spinner)


export default ContainerSpinnerComponent;
