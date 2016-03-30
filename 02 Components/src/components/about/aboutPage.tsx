import * as React from 'react';

interface Props extends React.Props<About> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class About extends React.Component<Props, {}> {
   public render() {
       return (
           <div className="row about-page top-buffer">
             <h1 className="jumbotron">03 Navigation</h1>

             <div className="col-xs-12">
               <h1>
                 <small>
                   This sample takes as starting point sample "01 Hello react".
                 </small>
               </h1>
               <div className="col-xs-12">
                   <h3>
                       <small>
                           We are adding react components: a main component that consumes a header and aboutPage component.
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
                         app.tsx: <small>main component, instantiates header and common component.</small>
                       </h4>
                     </li>
                     <li>
                       <h4>
                         header.tsx: <small>simulate a header component (in next samples this will include a nav bar).</small>
                       </h4>
                     </li>
                     <li>
                       <h4>
                         aboutPage.tsx: <small>page like component.</small>
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
