import React from "react";
import {Container} from "react-bootstrap";

export const Header = () => {
    return (
        <nav className={"navbar bg-light mb-4 p-0"}>
            <Container>
                <a className={"navbar-brand"} href={"#"}>
                    <div className="d-flex">
                        <img src={"https://miro.medium.com/max/400/1*nP2C50GK4_-ly_R_mq3juQ.png"} alt={"Logo"}/>
                        <span className="font-weight-bold">Project Manager</span>
                    </div>
                </a>
            </Container>
        </nav>
    )
}

export default Header;
