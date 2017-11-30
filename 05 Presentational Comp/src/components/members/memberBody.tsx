import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberRow } from './memberRow';

interface Props {
    members: MemberEntity[];
}

export const MemberBody: React.StatelessComponent<Props> = ({ members }) => {

    return(
        <tbody>
            {
              members.map((member) =>
                <MemberRow
                  key={member.id}
                  member={member}
                />
              )
            }
        </tbody>
    );
}