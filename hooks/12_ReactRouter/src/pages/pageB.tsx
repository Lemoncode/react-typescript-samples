import * as React from "react";
import { Link } from "react-router-dom";

export const PageB = () => 
  <div>
    <h2>Hello from page B</h2>
    <br />
    <Link to="/">Navigate to Page A</Link>
  </div>
