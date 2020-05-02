import React, {Component} from "react";
import './Database.css'
import UserList from "../../components/member/UserList";
import axios from 'axios'
import Loader from '../../components/UI/Loader/Loader.js'

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
        ],
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://takeandgo-36cc4.firebaseio.com/users.json')
            const users = []
            console.log(response.data)
            Object.keys(response.data).forEach((key, index) =>{
                users.push({
                    id: key,
                    name: response.data[key].name,
                    surname: response.data[key].surname,
                    type: response.data[key].access,
                })
            })
            this.setState({users, loading: false})
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
                    {
                        this.state.loading
                        ? <Loader />
                    :
                            <UserList
                                users={this.state.users}
                                onDeleteClick={this.onDeleteClickHandler}
                            />
                    }
                </div>
            </div>
        );
    }
}
export default Database;