import React from 'react';
import './ItemLi.css'
const list = [
    {id: 0, title: 'База данных',},
    {id: 1, title: 'Статистика',},
    {id: 2, title: 'Личный кабинет',},
    {id: 3, title: 'Действия',},
    {id: 4, title: 'История',},
    {id: 5, title: 'Выход',},
];


const SideMenu = (props) => (
    <ul className="ul-menu-list">
        {list.map(item => (
            (item.id === 0 || item.id === 1) && props.user === 0 ?
            null : <li key={item.id} className="ul-no-point"><a>{item.title}</a></li>
        ))}
    </ul>
);

export default SideMenu;


