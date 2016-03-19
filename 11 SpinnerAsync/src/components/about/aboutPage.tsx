import * as React from 'react';

interface Props {
}

export default class About extends React.Component<Props, {}> {
   public render() {
       return (
          <div className="row about-page">
            <h1 className="jumbotron">11 Spinner Async</h1>

            <div className="col-xs-12">
              <h1>
                <small>
                  In this sample we are going to show a spinner (busy indicator)
                  whenever one or more ajax request are in progress.
                </small>
              </h1>
            </div>

            <div className="col-xs-12 top-buffer">
              <h3>Highlights</h3>
              <hr/>
              <h3>
                <small>
                  The most interesting parts worth to take a look
                </small>
              </h3>
            </div>

            <div className="col-xs-12 top-buffer">
              <ul>
                <li>
                  <h4><b>Components:</b></h4>
                  <ul className="top-buffer">
                    <li>
                      <h4>
                        MembersPage.tsx: <small>just fire two async request (Github json API), member and
                          repositories belonging to a given organization.</small>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Spinner.tsx: <small>just fire two async request (Github json API), member and
                          repositories belonging to a given organization.</small>
                      </h4>
                    </li>
                  </ul>
                </li>

                <li className="top-buffer">
                  <h4><b>Reducers:</b></h4>
                  <ul className="top-buffer">
                    <li>
                      <h4>
                        httpReducer.ts: <small>Takes care of handling httpCallStarted and httpCallCompleted actions,
                          updating the show spinner props (internally counts the number of requests that are in progres).
                        </small>
                      </h4>
                    </li>
                  </ul>
                </li>

                <li className="top-buffer">
                  <h4><b>Actions:</b></h4>
                  <ul className="top-buffer">
                    <li>
                      <h4>
                        loadMembers.ts / loadRepos.ts: <small>MembersPage.tsx trigger this actions to request async data.</small>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        httpInitializeDispatcher.ts: <small>Spinner.tsx trigger this action to initialize http service</small>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        httpCallStarted.ts / httpCallCompleted.ts: <small>this two actions notify httpReducer.ts  whenever an
                          AJAX request has been fired or completed.</small>
                      </h4>
                    </li>
                  </ul>
                </li>

                <li className="top-buffer">
                  <h4><b>Services:</b></h4>
                  <ul className="top-buffer">
                    <li>
                      <h4>
                        MemberAPI.ts: <small>fake member API (implemented two methods that request real json calls to Github
                          API to retrieve list of members and repos from a given organizations). THis member API, makes use of an
                          http helper class we have created.</small>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        http.ts: <small>Wraps an $ajax.getjson request and takes care of notifying (dispatching an action)
                        whenever an ajax call has been fired or completed.</small>
                      </h4>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
       );
  }
}
