import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="row about-page">
           <h1 className="jumbotron">05 Presentational Component</h1>

           <div className="col-xs-12">
             <h1>
               <small>
                 This sample takes as starting point sample "04 DisplayData".
               </small>
             </h1>
             <div className="col-xs-12">
                 <h3>
                     <small>
                         We are extracting member row component in a separate file and then we are using it in membersPage.
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
                 <h4><b>Components:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       memberRow.tsx: <small>rendering member row component.</small>
                     </h4>
                   </li>
                   <li>
                     <h4>
                       membersPage.tsx: <small>using memberRow component.</small>
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
