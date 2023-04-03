import { MemberEntity } from "../model/member";
import { getMembersCollection } from "../api/memberApi";
import * as React from "react";

const useMemberCollection = () => {
    const [memberCollection, setMemberCollection] = React.useState<MemberEntity[]>([])

    const loadMemberCollection = () => {
        getMembersCollection().then(memberCollection =>
            setMemberCollection(memberCollection)
        );
    };

    return { memberCollection, loadMemberCollection }
}

const MemberRow = ({ member }: { member: MemberEntity }) =>
    <tr>
        <td><img src={member.avatar_url} style={{ maxWidth: '10rem' }} /></td>
        <td><span>{member.id}</span></td>
        <td>{member.login}</td>
    </tr>

export const MemberTableComponent = () => {
    const { memberCollection, loadMemberCollection } = useMemberCollection();

    React.useEffect(() => {
        console.log(memberCollection)
        loadMemberCollection()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {memberCollection.map(member => (
                        <MemberRow key={member.id} member={member} />
                    ))}
                </tbody>
            </table>

        </>
    )
}