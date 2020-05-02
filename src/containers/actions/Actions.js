import React from 'react';
import './Actions.css'

import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


function Actions() {


    return(
        <div>
            <h2>Что ты хочешь сделать?</h2>
            <div className='container'>
                <Link to="/add"><Button variant="contained" color="primary" type="submit"
                                           >
                    Add

                </Button>
                </Link>
            </div>
        </div>
    )
}

export default Actions;