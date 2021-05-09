import React from "react";
import Book from "../Book";

function Results() {
    return (
        <div className="resultsDiv">
            <h4>Results</h4>
            {/* <div>
            {books.map(book =>  {
                        return ( */}
                           <Book 
                        //    id={book.id}
                        //    title={book.title}
                        //    author={book.author}
                        //    description={book.description}
                        //    image={book.image}
                        //    alt={book.alt}
                        //    link={book.link}
                           />
                        {/* );
                     })} */}
            {/* </div> */}

        </div>
    )
}

export default Results;