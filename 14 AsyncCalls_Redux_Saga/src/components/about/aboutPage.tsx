import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="row about-page top-buffer">
        <h1 className="jumbotron col-12">15 Redux Saga</h1>
        <div className="container-fluid">
          <div className="col-12">
            <h1>
              <small>
                This sample takes as starting point sample "10 AsyncCalls_Redux_Thunk".
               </small>
            </h1>
            <div className="col-12">
              <h3>
                <small>
                  Refactor, instead of managing async calls via Redux Thunk, use Redux Saga (<b>Important: we are targeting here ES6</b>).
                     </small>
              </h3>
            </div>
          </div>

          <div className="col-12 top-buffer">
            <h3>Highlights</h3>
            <hr />
            <h3>
              <small>
                The most interesting parts worth to take a look
               </small>
            </h3>
          </div>

          <div className="col-12 top-buffer">
            <ul>
              <li className="top-buffer">
                <h4><b>Components:</b></h4>
                <ul className="top-buffer">
                  <li>
                    <h4>
                      app.tsx: <small>Here we initialize Redux Saga middleware and register our sagas / watchers.</small>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      membersSaga.tsx: <small>This saga will be watching for fetchMemberRequest action and perform the async call.</small>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      watchersSaga.tsx: <small>Common entry point to register all sagas.</small>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      fetMembersRequest.tsx: <small>Naming refactor, instead of LoadMembers / AssignMembers, we have
                       decided to rename it to: fetchMembersRequest, fetchMembersCompleted.</small>
                    </h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
