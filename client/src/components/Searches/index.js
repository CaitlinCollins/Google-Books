import React from "react";

function Searches(props) {
    return (
        <div>
            <h3>Book Search</h3>
            <p>Book</p>
            <form>
                <input value={props.query} placeholder="Title Here!" onChange={e => props.handleInputChange(e)}></input>
                <button onClick={props.handleClick}>Search</button>
            </form>
        </div>
    )
}

export default Searches;