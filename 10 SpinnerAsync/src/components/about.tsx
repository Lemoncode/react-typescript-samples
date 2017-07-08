import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page">
      <h1 className="jumbotron">10 SpinnerAsync</h1>

      <div className="col-xs-12">
        <h1>
          <small>This sample takes as starting point sample "09 Redux".</small>
        </h1>
        <div className="col-xs-12">
          <h3>
            <small>we will display a busy indicator when an ajax request is in progress.</small>
          </h3>
        </div>
      </div>

      <div className="col-xs-12 top-buffer">
        <h3>Highlights</h3>
        <hr />
        <h3>
          <small>The most interesting parts worth to take a look</small>
        </h3>
      </div>

      <div className="col-xs-12 top-buffer">
        <ul>
          <li className="top-buffer">
            <h4><b>Actions:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  ./src/middlewares/http/actions.ts: <small>Create actions for http middleware</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Middlewares:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  ./src/middlewares/http/middleware.ts: <small>Create http middleware</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Reducers:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  ./src/reducers/http.ts: <small>Manage http state</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Store:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  ./store.ts: <small>Update store to use in http middleware</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  ./src/common/components/spinner/spinner.tsx: <small>Presentational component</small>
                </h4>
              </li>
              <li>
                <h4>
                  ./src/common/components/spinner/spinnerContainer.tsx: <small>Container component</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
