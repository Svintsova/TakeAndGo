import React, {Component} from "react";
import './Add.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Input from "../../components/UI/input/Input";
import {createControl, validate, validateForm} from "../../form/formFramework";
import axios from 'axios'

function createFormControls() {
    return {

        name: createControl({
                id:1,
                label: 'Name',
                variant: 'outlined',
                errorMessage: 'Это поле не может быть пустым'},
            {required: true}),

        surname: createControl({
                id:2,
                label: 'Surname',
                errorMessage: 'Это поле не может быть пустым'},
            {required: true}),

        email: createControl({
                id:3,
                label: 'Email',
                errorMessage: 'Это поле не может быть пустым'},
            {required: true}),
        password: createControl({
                id:4,
                label: 'Password',
                errorMessage: 'Это поле не может быть пустым'},
            {required: true}),
        access: createControl({
                id:5,
                label: 'Access',
                errorMessage: 'Это поле не может быть пустым'},
            {required: true}),
    }
}


export default class AddUser extends Component{
    state ={
        user:[],
        isFormValid: false,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    createUserHandler = async event => {
        event.preventDefault()

        const user = []
        const index = user.length + 1

        const {name, surname, email, password, access} = this.state.formControls

        const newUser = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            password: password.value,
            access: access.value
        }

        user.push(newUser)

        console.log(user)
        axios.post('https://takeandgo-36cc4.firebaseio.com/users.json', newUser)
            .then(response => {
            console.log(response)
        })
            .catch(error =>console.log(error))

    }
    ChangeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            user:[],
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    renderControls () {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const   control = this.state.formControls[controlName]

            return (
                <TextField
                    key={controlName+index}
                    required
                    label= {control.label}
                    value = {control.value}
                    valid = {control.valid}
                    errormessage = {control.errorMessage}
                    variant="outlined"
                    onChange={event => this.ChangeHandler(event.target.value, controlName)}
                />
            )
        })

    }



    render() {



        return (
            <div className="Add">
                <div>
                    <h1>Добавить в базу данных</h1>
                    <form onSubmit={this.submitHandler} className="AuthForm">

                        {this.renderControls()}

                        <div className='Button'>
                        <Button variant="contained" color="secondary" type="submit"
                                onClick={this.createUserHandler}
                               >
                            Добавить
                        </Button>


</div>

                    </form>
                </div>
            </div>
        );
    }
}
