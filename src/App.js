import React from 'react';
import './App.css';
import RentBox from "./Components/RentBox";
import MemberList from "./Components/MemberList";
import SideMenu from "./Components/SideMenu";



function App() {
    return (
        <div className="App">
            <nav>
                <div className="sideMenu">
                    <div className="logo">
                        <a href="" className=""></a>
                    </div>
                    <SideMenu user={1}/>
                </div>
            </nav>
            <main className="main">
                <MemberList/>
                <div>
                    <RentBox type="mouse" id={243234} start="12/13/23 34:43" end="12/13/23 34:43"/>
                    <RentBox type="marker" id={243234} start="12/13/23 34:43" end="12/13/23 34:43"/>
                    <RentBox type="laptop" id={243234} start="12/13/23 34:43" end="12/13/23 34:43"/>
                </div>
            </main>
        </div>
    );
}

export default App;
