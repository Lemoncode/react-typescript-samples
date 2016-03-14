import * as React from 'react';
import { connect } from 'react-redux'
import httpInitializeDispatcher from '../../actions/httpInitializeDispatcher'

interface Props {
  showSpinner? : boolean;
  initializeHttp? : () => void;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
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
          <div className="row">
            <span>Loading ... (add a better indicator later on)</span>
          </div>
        );
  }
}

// Container

const mapStateToProps = (state) => {
    return {
      showSpinner: state.httpCallsInProgress
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
