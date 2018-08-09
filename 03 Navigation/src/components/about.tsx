import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page col-12">
      <h1 className="jumbotron col-2">03 Navigation</h1>

      <div className="col-10" id="header-title">
        <h1>
          <small>
            This sample takes as starting point sample "02 Components".
                 </small>
        </h1>
        <div className="col-10">
          <h3>
            <small>
              We are adding page navigation to this project:
                       </small>
          </h3>
          <ul>
            <li><h3><small>We have added two pages (about, members).</small></h3></li>
            <li><h3><small>The user can navigate by clicking on links in a common navbar.</small></h3></li>
          </ul>
          <h3>
            <small>
              We are using <a target="_blank" href="https://github.com/reactjs/react-router">react-router</a> for the navigation support
                       </small>
          </h3>
        </div>
      </div>

      <div className="col-2 top-buffer">
        <h3>Highlights</h3>
        <hr />
        <h3>
          <small>
            The most interesting parts worth to take a look
                 </small>
        </h3>
      </div>

      <div className="col-10">
        <ul>
          <li className="top-buffer">
            <h4><b>Router:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  index.ts: <small>routes configuration.</small>
                </h4>
              </li>
            </ul>
          </li>

          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  app.tsx: <small>header + page container.</small>
                </h4>
              </li>
              <li>
                <h4>
                  header.tsx: <small>navigation links.</small>
                </h4>
              </li>
              <li>
                <h4>
                  aboutPage.tsx / membersPage.tsx: <small>pages</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
