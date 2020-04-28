import React, {Component} from "react";
import './Welcome.css';
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";




class Welcome extends Component{

    render() {
        return (
            <div className="Welcome">
                <div className="logo"></div>
                <div>
                    <Link to ="/signin"><Button style={"btn-sign-up"}> Регистрация </Button> </Link>
                    <Link to ="/signin"><Button style={"btn-sign-in"}>Войти  </Button> </Link>
                </div>

            </div>
        );
    }
}
export default Welcome;

