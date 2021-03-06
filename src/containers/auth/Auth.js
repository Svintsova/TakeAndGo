import React, {Component, isValidElement} from "react";
import './Auth.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Input from "../../components/UI/input/Input";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends Component{

    state = {
        isFormValid: false,
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

    validateControl (value, validation) {
        if (!validation) {return true}

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) &&isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid

    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
               <Input
                   key = {controlName+index}
                   type = {control.type}
                   valid = {control.valid}
                   value = {control.value}
                   touched = {control.touched}
                   label = {control.label}
                   errorMessage={control.errorMessage}
                   shouldValidate = {!!control.validation}
                   onChange = {event => this.onChangeHandler(event,controlName)}
               />
            )

        })
    }


    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className="AuthForm">
                        {this.renderInputs()}
                        <div className='Button'>
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}
                            >
                                Зарегистрироваться
                            </Button>

                            <Link to="/actions">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    onClick={this.loginHandler}
                                    disabled={!this.state.isFormValid}
                                >
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