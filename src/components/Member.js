import React from 'react'

export default props => (
    <tr>
        <th>{props.name}</th>
        <th>{props.surname}</th>
        <th><button>Click</button></th>
    </tr>
)