import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page col-12">
      <h1 className="jumbotron col-2">18 Hooks</h1>

      <div className="col-10" id="header-title">
        <h1>
          <small>This sample takes as starting point sample "08 ParamNavigation".</small>
        </h1>
        <div className="col-10">
          <h3>
            <small>We are replacing class components by stateless components using Hooks.</small>
          </h3>
        </div>
      </div>

      <div className="col-2 top-buffer">
        <h3>Highlights</h3>
        <hr />
        <h3>
          <small>The most interesting parts worth to take a look</small>
        </h3>
      </div>

      <div className="col-10">
        <ul>
          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  components/members/page.tsx: <small>Stateless component using Hooks.</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/member/pageContainer.tsx: <small>Stateless component using Hooks.</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
