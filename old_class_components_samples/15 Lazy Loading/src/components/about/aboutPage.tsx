import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="row about-page top-buffer">
           <h1 className="jumbotron">16 Lazy Loading</h1>

           <div className="col-xs-12">
             <h1>
               <small>
                 This sample takes as starting point sample "10 AsyncCalls Redux Thunk".
               </small>
             </h1>
             <div className="col-xs-12">
                 <h3>
                     <small>
                         We are adding Lazy Loading support to React Router: we are only loading AboutPage at startup and MemberPage + MembersPage
                         are loaded just on user request.
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
                 <h4><b>Configuration:</b></h4>
                 <ul className="top-buffer">
                   <li className="top-buffer">
                     <h4>
                       webpack.config.js: <small>code splitting into multiple bundles. We are creating app, styles and vendor bundles.
                        <b>Important</b>: use '[name]' webpack variable in output.filename section when using multiple entry points.</small>
                     </h4>
                   </li>
                 </ul>
               </li>
               <li className="top-buffer">
                 <h4><b>Components:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       index.tsx: <small>using require.ensure to request pages on demand.</small>
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
