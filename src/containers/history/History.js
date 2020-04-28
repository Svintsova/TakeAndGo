import React, {Component} from "react";
import './History.css';
import axios from 'axios';

class History extends Component{

    renderHistory() {
        return [1,2,3].map((rent, index) => {
            return (
                <p key = {index}>Элемент {rent}</p>
            )
        })
    }

    componentDidMount() {
        axios.get('https://takeandgo-36cc4.firebaseio.com/rents.json').then(response =>console.log(response))
    }

    render() {
        return (
            <div className="HistoryList">
                <div>
                    <h1>History</h1>
                    <div>
                        {this.renderHistory()}
                    </div>
                </div>
            </div>
        );
    }
}
export default History;