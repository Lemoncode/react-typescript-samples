import * as React from "react";
import { Link } from "react-router-dom";

export const PageA = () => 
  <div>
    <h2>Hello from page A</h2>
    <br />
    <Link to="/pageB">Navigate to Page B</Link>
  </div>
