import React from 'react';
import './App.css';
//import SideMenu from "./Components/SideMenu";
import RentBox from "./Components/RentBox";
import Member from "./Components/Member";
import TextField from '@material-ui/core/TextField';
//import {RentItem} from 'Components/RentItem.js';
// eslint-disable-next-line no-unused-vars
import { Button } from '@material-ui/core';
import MemberList from "./Components/MemberList";
import SideMenu from "./Components/SideMenu";

// const ICON_PATHS = {
//   mouse: '/img/mouse.svg',
//   laptop: '/img/laptop.svg',
//   keyboard: '/img/keyboard.svg',
//   marker: '/img/marker.svg'
// }
//
// function Icon({type}) {
//   const imgSrc = ICON_PATHS[type];
//   return <img src={imgSrc} className="icon" />;
// }


function App() {
  return (
    <div className="App">
        <div className = "sideMenu"> <SideMenu  user = {0}/></div>
        <MemberList/>
        <div>
         <RentBox type="mouse" id={243234} start="12/13/23 34:43" end="12/13/23 34:43"/>
         <RentBox type="mouse" id={243234} start="12/13/23 34:43" end="12/13/23 34:43"/>
         <RentBox type="mouse" id={243234} start="12/13/23 34:43" end="12/13/23 34:43"/>
        </div>
    </div>
  );
}
//
// export function RentItem({type, start, end, id}) {
//   return (
//       <div className="RentItem-bg ">
//         <Icon type={type} />
//         <div className="RentItem-text">
//           <p className="nomargin">Начало аренды <br/>
//           {start}<br/>
//           Конец аренды<br/>
//           {end}</p>
//         </div>
//           <div className="RentItem-id-box"><p>12345</p></div>
//           </div>
//   )
// }
//


export default App;
