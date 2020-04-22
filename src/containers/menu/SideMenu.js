import React from 'react';
import './ItemLi.css'
import {NavLink} from "react-router-dom";

const list = [
    {id: 0, title: 'База данных', href: '/database',},
    {id: 1, title: 'Статистика', href: '/statistics',},
    {id: 2, title: 'Личный кабинет', href: '/profile',},
    {id: 3, title: 'Действия', href: '/actions',},
    {id: 4, title: 'История', href: '/history',},
    {id: 5, title: 'Выход', href: '/',},
];


const SideMenu = (props) => (
    <ul className="ul-menu-list">
        {list.map(item => (
            (item.id === 0 || item.id === 1) && props.user === 0 ?
            null :
                <li
                    key={item.id}
                    className="menuItem"
                >
                    <NavLink to={item.href}>{item.title}</NavLink>
                </li>
        ))}
    </ul>
);

export default SideMenu;


