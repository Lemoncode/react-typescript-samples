import * as React from 'react';
import { connect } from 'react-redux';

interface Props extends React.Props<Spinner> {
  showSpinner? : boolean;
}

class Spinner extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);    
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


const ContainerSpinnerComponent = connect(
                                   mapStateToProps
                                )(Spinner)


export default ContainerSpinnerComponent;
