import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <div className="container-fluid">
        <div className="row about-page top-buffer">
          <h1 className="jumbotron">01 Hello React</h1>

          <div className="col-xs-12">
            <h1>
              <small>
                This sample takes as starting point sample "00 Boiler plate".
              </small>
            </h1>
            <div className="col-xs-12">
                <h3>
                    <small>
                        We add on top of that sample a simple react render.
                    </small>
                </h3>
            </div>
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
              <li className="top-buffer">
                <h4><b>Index:</b></h4>
                <ul className="top-buffer">
                  <li>
                    <h4>
                      index.tsx: <small>react + reactDom imports and simple dom render.</small>
                    </h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </div>
  , document.getElementById('root'));
