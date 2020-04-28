import React, {Component} from "react";
import './Layout.css';
import SideMenu from "../../containers/menu/SideMenu";



class Layout extends Component{
    render() {
        return (
            <div className="Layout">
                <div className="cnt-menu"><SideMenu user={1} /></div>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
export default Layout;