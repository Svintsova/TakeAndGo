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
import SignIn from "./components/modal/SignIn/SignIn";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/" exact render={() => <Welcome />} />
                <Route path="/signup" exact render={() => <Welcome />} />
                <Route path="/signin" exact render={() => <SignIn />} />

                <Route path="/home"  render={() => <Layout><Home /></Layout>} />
                <Route path="/database" render={() => <Layout><Database /></Layout>} />
                <Route path="/actions"  render={() => <Layout><Actions /></Layout>} />
            </React.Fragment>
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

