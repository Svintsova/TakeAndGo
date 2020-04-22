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
import Actions from "./containers/actions/Actions";
import {Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact render={() => <Welcome />} />
                <Route path="/home"  render={() => <Home />} />
                <Route path="/database" component={Database} />
                <Route path="/actions"  component={Actions} />
            </Layout>
        );
    }
}
export default App

class Home{

    render() {
        return (
                <h1>Welcome page</h1>
        );
    }
}

