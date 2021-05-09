import React from "react";
import { Container, Row, Col } from "../Grid";

function NavBar() {
    return (
        <nav className="nav">
            <a className="nav-link gBooks" href="#">Google Books</a>
            <a class="nav-link" href="#">Search</a>
            <a class="nav-link" href="#">Saved</a>
        </nav>
         
    )
}

export default NavBar;