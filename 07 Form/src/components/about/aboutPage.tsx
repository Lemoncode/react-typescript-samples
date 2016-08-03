import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="row about-page">
           <h1 className="jumbotron">07 Form</h1>

           <div className="col-xs-12">
             <h1>
               <small>
                 This sample takes as starting point sample "05 Presentational Component".
               </small>
             </h1>
             <div className="col-xs-12">
                 <h3>
                     <small>
                         We are creating a form to insert new members.
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
                 <h4><b>Router:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       index.tsx: <small>adding member route.</small>
                     </h4>
                   </li>
                 </ul>
               </li>

               <li className="top-buffer">
                 <h4><b>API:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       memberAPI.tsx: <small>implementing saveAuthor method.</small>
                     </h4>
                   </li>
                 </ul>
               </li>

               <li className="top-buffer">
                 <h4><b>Components:</b></h4>
                 <ul className="top-buffer">
                   <li>
                     <h4>
                       membersPage.tsx: <small>navigating to memberPage.tsx</small>
                     </h4>
                   </li>
                   <li>
                     <h4>
                       memberPage.tsx: <small>Container Component. Implementing method to save and validate members data.</small>
                     </h4>
                   </li>
                   <li>
                     <h4>
                       memberForm.tsx: <small>Presentational Component. Rendering inputs and save button components.</small>
                     </h4>
                   </li>
                   <li>
                     <h4>
                       textInput.tsx: <small>Presentational Component. Rendering input with validation errors.</small>
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
