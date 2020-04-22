import React, {Component} from "react";
import './Layout.css';
import SideMenu from "../../components/SideMenu";



class Layout extends Component{
    render() {
        return (
            <div className="Layout">
                <div className="cnt-menu"><SideMenu  /></div>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
export default Layout;