import * as React from "react"
import { FormProps, Link } from "react-router-dom"

export const LoginComponent: React.FC<FormProps> = (props) =>
    <div>
        <h2>Hello from login Page</h2>
        <br />
        <Link to="/pageB">Navigate to Page B</Link>
    </div>