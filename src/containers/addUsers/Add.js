import React, {Component} from "react";
import './Add.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


class Add extends Component{
    state ={
        user:[],
        userControls: {
            name: '',
            surname: '',
            access: '',
            email: '',
            password: '',
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }
    submitHandler = event => {
        event.preventDefault()
    }

    createUserHandler = () => {

    }


    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Добавить в базу данных</h1>

                    <form onSubmit={this.submitHandler} className="AuthForm">
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Surname" variant="outlined" />
                        <TextField id="outlined-basic" label="Access" variant="outlined" />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />

<div className='Button'>
                        <Button variant="contained" color="secondary" type="submit"
                                onClick={this.createUserHandler}>
                            Отправить
                        </Button>


</div>

                    </form>
                </div>
            </div>
        );
    }
}
export default Add;