import * as React from 'react';

interface Props {
  name : string;
  label : string;
  onChange : any;
  placeholder? : string;
  value: string;
  error : string;
}

// This components just contains a wrapper to avoid adding repetitive
// code to each input (label indicating error, onChange callback, ...)
// this is a port to typescript from Cory House sample
// for more advanced scenario, rather check
// https://github.com/christianalfoni/formsy-react
export default class Input extends React.Component<Props, {}> {
  constructor(props : Props){
        super(props);
  }


   public render() {
       var wrapperClass : string = 'form-group';
       if (this.props.error && this.props.error.length > 0) {
         wrapperClass += " " + 'has-error';
       }
       return (
         <div className={wrapperClass}>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <div className="field">
              <input type="text"
                name={this.props.name}
                className="form-control"
                placeholder={this.props.placeholder}
                ref={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange} />
              <div className="input">{this.props.error}</div>
            </div>
          </div>
       );
  }
}
