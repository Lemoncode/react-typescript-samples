import * as React from 'react';
import {Link} from 'react-router';
import MemberEntity from '../../api/memberEntity';


interface Props extends React.Props<MemberRow> {
  member : MemberEntity;
}

export default class MemberRow extends React.Component<Props, {}> {

  constructor(props : Props){
        super(props);
  }

   public render() {
       return (
         <tr>
           <td>
             <img src={this.props.member.avatar_url} className="avatar"/>
           </td>
           <td>
            <Link to={`/memberEdit/${this.props.member.id}`}>{this.props.member.id}</Link>
           </td>
           <td>
             <span>{this.props.member.login}</span>
           </td>
         </tr>
       );
  }
}
