import * as React from 'react';
import header from '../common/header'
import {Link} from 'react-router';

interface Props {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
           <div className="row about-page">
             <h1 className="jumbotron">03 Navigation</h1>

             <div className="col-xs-12">
               <h1>
                 <small>
                   Subtitle
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
                <li className="top-buffer">
                 <h4><b>Index:</b></h4>
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
               </ul>
             </div>
           </div>
       );
  }
}
