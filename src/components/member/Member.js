import React from "react";
import './Member.css';

const Member = props => {
    return (
        <div
            className="Member"
            key = {props.id}
        >
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.type}</p>
            <div
                onClick={() => props.onDeleteClick(props.id)}
            >
                RM
            </div>
        </div>
    )
}

export default Member;