import React from 'react';
import './Button.css'

const Button = props => {
    const cls = [
        'btn', props.style,
    ]

    return(
        <div onClick={props.onClick}
             className={cls.join(' ')}
             disabled={props.disabled}>
            {props.children}
        </div>
    )
}

export default Button;