import React from 'react';

const ICON_PATHS = {
    mouse: '/img/mouse.svg',
    laptop: '/img/laptop.svg',
    keyboard: '/img/keyboard.svg',
    marker: '/img/marker.svg'
}

// function Icon({type}) {
//     const imgSrc = ICON_PATHS[type];
//     return <img src={imgSrc} className="icon" />;
// }

// export default Icon;

export default ({type}) => {
    return <img src={ICON_PATHS[type]} className="" />
}