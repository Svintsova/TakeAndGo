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
import History from "./containers/history/History";
import Statistics from "./containers/statistics/Statistics";
import Profile from "./components/Profile";
import Auth from "./containers/auth/Auth";
import Add from "./containers/addUsers/Add";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/" exact render={() => <Welcome />} />
                <Route path="/signup" exact render={() => <Welcome />} />
                <Route path="/signin" exact render={() => <Auth />} />
                <Route path="/add" render={() => <Layout><Add /></Layout>} />
                <Route path="/database" render={() => <Layout><Database /></Layout>} />
                <Route path="/statistics"  render={() => <Layout><Statistics /></Layout>} />
                <Route path="/profile"  render={() => <Layout><Profile /></Layout>} />
                <Route path="/actions"  render={() => <Layout><Actions /></Layout>} />
                <Route path="/history"  render={() => <Layout><History /></Layout>} />
            </React.Fragment>
        );
    }
}
export default App



