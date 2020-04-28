import React, {Component} from "react";
import './Auth.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


class Auth extends Component{

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }

            },
        }
    }


    loginHandler = () => {

    }

    registerHandler = () => {

    }
    submitHandler = event => {
        event.preventDefault()
    }


    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className="AuthForm">
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
                                onClick={this.loginHandler}>
                            Зарегистрироваться
                        </Button>

                        <Link to="/actions"><Button variant="contained" color="primary" type="submit"
                                onClick={this.loginHandler}>
                            Войти
                        </Button>
                        </Link>
</div>

                    </form>
                </div>
            </div>
        );
    }
}
export default Auth;