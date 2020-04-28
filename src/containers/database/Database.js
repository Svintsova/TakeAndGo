import React, {Component} from "react";
import './Database.css'
import UserList from "../../components/member/UserList";
import axios from 'axios'
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

    async componentDidMount() {
        try {
            const response = await axios.get('https://takeandgo-36cc4.firebaseio.com/users.json')
            const users = []
            console.log(response.data)
            Object.keys(response.data).forEach((key, index) =>{
                users.push({
                    id: key,
                    name: key.name,
                    surname: key.surname,
                    type: key.access,
                })
                this.state({users})

            })
        } catch (e){
                console.log(e)
            }
    }

    onDeleteClickHandler = (UserID) => {
        console.log('UserID: ', UserID)
    }

    render() {
        return (
            <div className="Database">
                <h1>Список пользователей</h1>
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