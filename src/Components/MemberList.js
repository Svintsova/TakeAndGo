import React from 'react';

const users = [
    {
        id: 1,
        name: 'Robin Williams',
        occupation: 'teacher',
    },
    {
        id: 2,
        name: 'John Doe',
        occupation: 'gardener',
    },
];

const MemberList = () => (
    <table className="userTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SURNAME</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.occupation}</th>
                </tr>

            ))}
        </tbody>
    </table>
);

export default MemberList;