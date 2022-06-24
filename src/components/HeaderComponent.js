import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class HeaderComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className="Jumbotron">
                    <div className="container">
                        <div className="row row-content">
                            <div>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines, and create a unique fusion experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HeaderComponent;