import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="row about-page">
           <h1 className="jumbotron">06 AJAX Call</h1>

           <div className="col-xs-12">
             <h1>
               <small>
                 This sample takes as starting point sample "05 Presentational Component".
               </small>
             </h1>
             <div className="col-xs-12">
                 <h3>
                     <small>
                         We are retrieving members data from <a target="_blank" href="https://github.com/Lemoncode"> Lemoncode GitHub</a>
                     </small>
                 </h3>
                 <h3>
                     <small>
                         We are using <a target="_blank" href="https://github.com/kriskowal/q">q library</a> to retrieve data from GitHub.
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
                 <h4><b>API:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       memberAPI.tsx: <small>defining getAllMembersAsync method.</small>
                     </h4>
                   </li>
                 </ul>
               </li>

               <li className="top-buffer">
                 <h4><b>Components:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       membersPage.tsx: <small>using getAllMembersAsync method.</small>
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
