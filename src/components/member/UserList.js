import React from "react";
import './UserList.css';
import Member from "./Member";

const UserList = props => {
    let list = props.users;
    return list.map((user, index) => (
        <Member key={user.id}
                id={user.id}
                name={user.name}
                surname={user.surname}
                type={user.type}
                onDeleteClick={props.onDeleteClick}
        />
    ))
}


export default UserList;