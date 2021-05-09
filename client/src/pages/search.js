import React from "react";
import Jumbotron from "../components/Jumbotron";
import Searches from "../components/Searches";
import Results from "../components/Results";

function Search() {
    return (
        <div>
            <Jumbotron />
            <Searches />
            <Results />
        </div>
    )
}

export default Search;