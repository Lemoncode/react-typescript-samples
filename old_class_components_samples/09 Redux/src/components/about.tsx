import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page col-12">
      <h1 className="jumbotron col-2">09 Redux</h1>

      <div className="col-10" id="header-title">
        <h1>
          <small>This sample takes as starting point sample "08 ParamNavigation".</small>
        </h1>
        <div className="col-10">
          <h3>
            <small>We are adding Redux pattern</small>
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
            <h4><b>Actions:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  components/members/actions/...: <small>Isolated members component actions</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/member/actions/...: <small>Isolated member component actions</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Reducers:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  reducers/members.ts: <small>Manage members state</small>
                </h4>
              </li>
              <li>
                <h4>
                  reducers/member.ts: <small>Manage member state</small>
                </h4>
              </li>
              <li>
                <h4>
                  reducers/memberErrors.ts: <small>Manage memberErrors state</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Store:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  store.ts: <small>Configured store to be used in router.tsx</small>
                </h4>
              </li>
            </ul>
          </li>
          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  router.tsx: <small>Updated to use store</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/members/pageContainer.tsx: <small>Create component using reducers state</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/members/page.tsx: <small>Updated</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/member/pageContainer.tsx: <small>Updated component using reducers state</small>
                </h4>
              </li>
              <li>
                <h4>
                  components/member/page.tsx: <small>Updated.</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
