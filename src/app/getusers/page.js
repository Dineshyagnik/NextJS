import getUsers from "../../../services/getUser"
import Link from 'next/link';

export default async function Page() {
    const getUserList = getUsers();
    const users = await getUserList;
    console.log(users);
    return (
        <div>
            <h1>Get User</h1>
            {
                users.map((user) => (
                    <h3 key={user.id}>
                        <Link href={`/getusers/${user.id}`}>{user.name}</Link>
                    </h3>
                ))
            }
        </div>
    )
}