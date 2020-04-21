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
    <ul>
        {users.map(user => (
            <li key={user.id}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.occupation}</div>
            </li>
        ))}
    </ul>
);

export default MemberList;