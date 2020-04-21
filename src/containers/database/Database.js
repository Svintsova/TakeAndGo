import React, {Component} from "react";
import './Database.css'
import UserList from "../../components/member/UserList";

class Database extends Component{
    state = {
        users:[
            {
                id: '0',
                name: 'NAME',
                surname: 'SURNAME',
                type: 'ACCESS',
            },
            {
                id: 1232,
                name: 'Иван',
                surname: 'Петров',
                type: 'admin',
            },
            {
                id: 3244,
                name: 'Котя',
                surname: 'Селедкин',
                type: 'user',
            },
            {
                id: 4243,
                name: 'Анна',
                surname: 'Пивко',
                type: 'user',
            },
        ]
    }


    onDeleteClickHandler = (UserID) => {
        console.log('UserID: ', UserID)
    }

    render() {
        return (
            <div className="Database">
                <div className="MemberBox">
                    <UserList
                        users={this.state.users}
                        onDeleteClick={this.onDeleteClickHandler}
                    />
                </div>
            </div>
        );
    }
}
export default Database;