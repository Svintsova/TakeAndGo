import React, {Component} from "react";
import './Welcome.css';
import Button from "../../components/UI/Button/Button";
import {NavLink} from "react-router-dom";




class Welcome extends Component{

    render() {
        return (
            <div className="Welcome">
                <div className="logo"></div>
                <div>
                    <NavLink to ="/actions"><Button style={"btn-sign-up"}> Регистрация </Button> </NavLink>
                    <NavLink to ="/signin"><Button style={"btn-sign-in"}>Войти  </Button> </NavLink>
                </div>

            </div>
        );
    }
}
export default Welcome;

