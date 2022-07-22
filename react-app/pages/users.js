import {useState} from "react";
import Link from "next/link";

const Users = () => {

    const [users, setUsers] = useState([
        {id: 1, name: "Egor"},
        {id: 2, name: "Igor"}
    ])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => {
                        return (
                            <li key={user.id}>
                                <Link href={`/users/${user.id}`}>
                                    <a>{user.name}</a>
                                </Link>
                            </li>

                        )
                    }
                )}
            </ul>
        </div>
    );
};

export default Users;