import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page">
      <h1 className="jumbotron">08 ParamNavigation</h1>

      <div className="col-xs-12">
        <h1>
          <small>This sample takes as starting point sample "07 Form".</small>
        </h1>
        <div className="col-xs-12">
          <h3>
            <small>We are creating Member page Form to insert and update members</small>
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
            <h4><b>API:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  api/member/index.ts: <small>Add save method</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  components/member/pageContainer.tsx: <small>Component with state</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/member/page.tsx: <small>Page with presentational component</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/member/memberForm.tsx: <small>Member Form</small>
                </h4>
              </li>
              <li>
                <h4>
                  common/components/form/input.tsx: <small>Input component to use in Forms</small>
                </h4>
              </li>
              <li>
                <h4>
                  common/components/form/button.tsx: <small>Button component to use in Forms</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
