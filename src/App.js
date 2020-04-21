import React, {Component} from 'react';
// import './App.css';
// import RentBox from "./components/RentBox";
// import MemberList from "./components/MemberList";
// import SideMenu from "./components/SideMenu";
// import Actions from "./components/Button";
// import SignIn from "./components/SignIn";
import Layout from "./hoc/Layout/Layout";
import Welcome from "./containers/welcome/Welcome";
import Database from "./containers/database/Database";


class App extends Component {
    render() {
        return (
            <Layout>
                <Database />
            </Layout>
        );
    }
}
export default App

// <nav>
//     <div className="sideMenu">
//         <div className="logo">
//             <a href="" className=""></a>
//         </div>
//         <SideMenu user={1}/>
//     </div>
// </nav>
// <main className="main">
//     <Actions />
//     <SignIn />
// </main>
