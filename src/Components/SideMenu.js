import React from 'react';
import 'src/App.css';
const list = [
    {id: 0, title: 'База данных',},
    {id: 1, title: 'Статистика',},
    {id: 2, title: 'Личный кабинет',},
    {id: 3, title: 'Действия',},
    {id: 4, title: 'История',},
    {id: 5, title: 'Выход',},
];


const SideMenu = (props) => (
    <ul>
        {list.map(item => (
            (item.id === 0 || item.id === 1) && props.user === 0 ?
            null : <li key={item.id} style = {listStyleType: 'none'}><div>{item.title}</div></li>
        ))}
    </ul>
);

export default SideMenu;


