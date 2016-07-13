import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
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
                         We are mocking a fake API layer to retrieve and display data.
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
                     memberEntity.ts: <small>define member entity.</small>
                   </h4>
                 </li>
                 <li>
                   <h4>
                     memberMockData.ts: <small>create mock data.</small>
                   </h4>
                 </li>
                 <li>
                   <h4>
                     memberAPI.ts: <small>API configuration to get members.</small>
                   </h4>
                 </li>
               </ul>
              </li>

               <li className="top-buffer">
                 <h4><b>Components:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       membersPage.tsx: <small>retrieving data and rendering component.</small>
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
