import React from 'react';
import "../SignIn.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
export default props => (
    <React.Fragment>

        <div className={"sg-container"}>
            <input type="text"  placeholder={"Имя"} className="sg-input"/>
            <input type="text"  placeholder={"Фамилия"} className="sg-input"/>
            <input type="text"  placeholder={"Электронная почта"} className="sg-input"/>
            <input type="text"  placeholder={"Пароль"} className="sg-input"/>
        </div>
        <Backdrop />
    </React.Fragment>
)