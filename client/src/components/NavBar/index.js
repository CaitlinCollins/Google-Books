import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
    return (
        <header>
            <a className="homeLink">
                <Link to="/">Google Books
                </Link>
            </a>
            <a class="searchLink">
                <Link to="/Search">Search
                </Link>
                </a>
            <a class="savedLink">
                <Link to="/Saved">Saved
                </Link>
                </a>
        </header>
         
    )
}

export default NavBar;