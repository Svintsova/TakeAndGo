import React from 'react';
import Icon from "./Icons";

export function RentBox({type, start, end, id}) {
    return (
        <div className="RentItem-bg ">
            <Icon type={type} />
            <div className="RentItem-text">
                <p>Начало аренды <br/>
                    {start}<br/>
                    Конец аренды<br/>
                    {end}</p>
            </div>
            <div className="RentItem-id-box"><p>12345</p></div>
        </div>
    )
}


export default RentBox;