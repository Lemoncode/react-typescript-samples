import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page">
      <h1 className="jumbotron">04 DisplayData</h1>

      <div className="col-xs-12">
        <h1>
          <small>
            This sample takes as starting point sample "03 Navigation".
                 </small>
        </h1>
        <div className="col-xs-12">
          <h3>
            <small>
              We are adding a mock API to simulate fetching members data from Github:
                       </small>
          </h3>
          <ul>
            <li><h3><small>We have added memberAPI and mock data.</small></h3></li>
            <li><h3><small>Update Members Page.</small></h3></li>
          </ul>
        </div>
      </div>

      <div className="col-xs-12 top-buffer">
        <h3>Highlights</h3>
        <hr />
        <h3>
          <small>
            The most interesting parts worth to take a look
                 </small>
        </h3>
      </div>

      <div className="col-xs-12 top-buffer">
        <ul>
          <li className="top-buffer">
            <h4><b>API:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  api/member/index.ts: <small>API service.</small>
                </h4>
              </li>
              <li>
                <h4>
                  api/member/mockData.ts: <small>Mock data.</small>
                </h4>
              </li>
            </ul>
          </li>

          <li className="top-buffer">
            <h4><b>Model:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  model/memberEntity.ts: <small>Member model.</small>
                </h4>
              </li>
            </ul>
          </li>

          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  members/page.tsx: <small>Members table</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
